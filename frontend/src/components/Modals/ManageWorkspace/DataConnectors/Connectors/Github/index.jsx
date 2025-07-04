import React, { useEffect, useState } from "react";
import System from "@/models/system";
import showToast from "@/utils/toast";
import pluralize from "pluralize";
import { TagsInput } from "react-tag-input-component";
import { Info, Warning } from "@phosphor-icons/react";
import { Tooltip } from "react-tooltip";

const DEFAULT_BRANCHES = ["main", "master"];
export default function GithubOptions() {
  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState(null);
  const [accessToken, setAccessToken] = useState(null);
  const [ignores, setIgnores] = useState([]);

  const [settings, setSettings] = useState({
    repo: null,
    accessToken: null,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    try {
      setLoading(true);
      showToast(
        "Fetching all files for repo - this may take a while.",
        "info",
        { clear: true, autoClose: false }
      );
      const { data, error } = await System.dataConnectors.github.collect({
        repo: form.get("repo"),
        accessToken: form.get("accessToken"),
        branch: form.get("branch"),
        ignorePaths: ignores,
      });

      if (!!error) {
        showToast(error, "error", { clear: true });
        setLoading(false);
        return;
      }

      showToast(
        `${data.files} ${pluralize("file", data.files)} collected from ${
          data.author
        }/${data.repo}:${data.branch}. Output folder is ${data.destination}.`,
        "success",
        { clear: true }
      );
      e.target.reset();
      setLoading(false);
      return;
    } catch (e) {
      console.error(e);
      showToast(e.message, "error", { clear: true });
      setLoading(false);
    }
  };

  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full px-1 md:pb-6 pb-16">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="w-full flex flex-col py-2">
            <div className="w-full flex flex-col gap-4">
              <div className="flex flex-col pr-10">
                <div className="flex flex-col gap-y-1 mb-4">
                  <label className="text-white text-sm font-bold">
                    GitHub Repo URL
                  </label>
                  <p className="text-xs font-normal text-theme-text-secondary">
                    Url of the GitHub repo you wish to collect.
                  </p>
                </div>
                <input
                  type="url"
                  name="repo"
                  className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
                  placeholder="https://github.com/Athena/athena"
                  required={true}
                  autoComplete="off"
                  onChange={(e) => setRepo(e.target.value)}
                  onBlur={() => setSettings({ ...settings, repo })}
                  spellCheck={false}
                />
              </div>
              <div className="flex flex-col pr-10">
                <div className="flex flex-col gap-y-1 mb-4">
                  <label className="text-white font-bold text-sm flex gap-x-2 items-center">
                    <p className="font-bold text-white">Github Access Token</p>{" "}
                    <p className="text-xs font-light flex items-center">
                      <span className="text-theme-text-secondary">
                        optional
                      </span>
                      <PATTooltip accessToken={accessToken} />
                    </p>
                  </label>
                  <p className="text-xs font-normal text-theme-text-secondary">
                    Access Token to prevent rate limiting.
                  </p>
                </div>
                <input
                  type="text"
                  name="accessToken"
                  className="border-none bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-full p-2.5"
                  placeholder="github_pat_1234_abcdefg"
                  required={false}
                  autoComplete="off"
                  spellCheck={false}
                  onChange={(e) => setAccessToken(e.target.value)}
                  onBlur={() => setSettings({ ...settings, accessToken })}
                />
              </div>
              <GitHubBranchSelection
                repo={settings.repo}
                accessToken={settings.accessToken}
              />
            </div>

            <div className="flex flex-col w-full py-4 pr-10">
              <div className="flex flex-col gap-y-1 mb-4">
                <label className="text-white text-sm flex gap-x-2 items-center">
                  <p className="text-white text-sm font-bold">File Ignores</p>
                </label>
                <p className="text-xs font-normal text-theme-text-secondary">
                  List in .gitignore format to ignore specific files during
                  collection. Press enter after each entry you want to save.
                </p>
              </div>
              <TagsInput
                value={ignores}
                onChange={setIgnores}
                name="ignores"
                placeholder="!*.js, images/*, .DS_Store, bin/*"
                classNames={{
                  tag: "bg-theme-settings-input-bg light:bg-black/10 bg-blue-300/10 text-zinc-800",
                  input:
                    "flex p-1 !bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col gap-y-2 w-full pr-10">
            <PATAlert accessToken={accessToken} />
            <button
              type="submit"
              disabled={loading}
              className="mt-2 w-full justify-center border border-slate-200 px-4 py-2 rounded-lg text-dark-text text-sm font-bold items-center flex gap-x-2 bg-slate-200 hover:bg-slate-300 hover:text-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed"
            >
              {loading ? "Collecting files..." : "Submit"}
            </button>
            {loading && (
              <p className="text-xs text-white/50">
                Once complete, all files will be available for embedding into
                workspaces in the document picker.
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

function GitHubBranchSelection({ repo, accessToken }) {
  const [allBranches, setAllBranches] = useState(DEFAULT_BRANCHES);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAllBranches() {
      if (!repo) {
        setAllBranches(DEFAULT_BRANCHES);
        setLoading(false);
        return;
      }

      setLoading(true);
      const { branches } = await System.dataConnectors.github.branches({
        repo,
        accessToken,
      });
      setAllBranches(branches.length > 0 ? branches : DEFAULT_BRANCHES);
      setLoading(false);
    }
    fetchAllBranches();
  }, [repo, accessToken]);

  if (loading) {
    return (
      <div className="flex flex-col w-60">
        <div className="flex flex-col gap-y-1 mb-4">
          <label className="text-white text-sm font-bold">Branch</label>
          <p className="text-xs font-normal text-theme-text-secondary">
            Branch you wish to collect files from.
          </p>
        </div>
        <select
          name="branch"
          required={true}
          className="border-none bg-theme-settings-input-bg border-gray-500 text-white focus:outline-primary-button active:outline-primary-button outline-none text-sm rounded-lg block w-full p-2.5"
        >
          <option disabled={true} selected={true}>
            -- loading available branches --
          </option>
        </select>
      </div>
    );
  }

  return (
    <div className="flex flex-col w-60">
      <div className="flex flex-col gap-y-1 mb-4">
        <label className="text-white text-sm font-bold">Branch</label>
        <p className="text-xs font-normal text-theme-text-secondary">
          Branch you wish to collect files from.
        </p>
      </div>
      <select
        name="branch"
        required={true}
        className="border-none bg-theme-settings-input-bg border-gray-500 text-white focus:outline-primary-button active:outline-primary-button outline-none text-sm rounded-lg block w-full p-2.5"
      >
        {allBranches.map((branch) => {
          return (
            <option key={branch} value={branch}>
              {branch}
            </option>
          );
        })}
      </select>
    </div>
  );
}

function PATAlert({ accessToken }) {
  if (!!accessToken) return null;
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-x-2 text-white mb-4 bg-blue-800/30 w-fit rounded-lg px-4 py-2">
      <div className="gap-x-2 flex items-center">
        <Info className="shrink-0" size={25} />
        <p className="text-sm">
          Without filling out the <b>Github Access Token</b> this data connector
          will only be able to collect the <b>top-level</b> files of the repo
          due to GitHub's public API rate-limits.
          <br />
          <br />
          <a
            href="https://github.com/settings/personal-access-tokens/new"
            rel="noreferrer"
            target="_blank"
            className="underline"
            onClick={(e) => e.stopPropagation()}
          >
            {" "}
            Get a free Personal Access Token with a GitHub account here.
          </a>
        </p>
      </div>
    </div>
  );
}

function PATTooltip({ accessToken }) {
  if (!!accessToken) return null;
  return (
    <>
      {!accessToken && (
        <Warning
          size={14}
          className="ml-1 text-orange-500 cursor-pointer"
          data-tooltip-id="access-token-tooltip"
          data-tooltip-place="right"
        />
      )}
      <Tooltip
        delayHide={300}
        id="access-token-tooltip"
        className="max-w-xs z-99"
        clickable={true}
      >
        <p className="text-sm">
          Without a{" "}
          <a
            href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens"
            rel="noreferrer"
            target="_blank"
            className="underline"
            onClick={(e) => e.stopPropagation()}
          >
            Personal Access Token
          </a>
          , the GitHub API may limit the number of files that can be collected
          due to rate limits. You can{" "}
          <a
            href="https://github.com/settings/personal-access-tokens/new"
            rel="noreferrer"
            target="_blank"
            className="underline"
            onClick={(e) => e.stopPropagation()}
          >
            create a temporary Access Token
          </a>{" "}
          to avoid this issue.
        </p>
      </Tooltip>
    </>
  );
}

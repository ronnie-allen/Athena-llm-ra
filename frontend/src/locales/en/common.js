const TRANSLATIONS = {
  common: {
    "workspaces-name": "Workspaces Name",
    error: "error",
    success: "success",
    user: "User",
    selection: "Model Selection",
    saving: "Saving...",
    save: "Save changes",
    previous: "Previous Page",
    next: "Next Page",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "Instance Settings",
    system: "General Settings",
    invites: "Invites",
    users: "Users",
    workspaces: "Workspaces",
    "workspace-chats": "Workspace Chats",
    customization: "Customization",
    "api-keys": "Developer API",
    llm: "LLM",
    transcription: "Transcription",
    embedder: "Embedder",
    "text-splitting": "Text Splitter & Chunking",
    "voice-speech": "Voice & Speech",
    "vector-database": "Vector Database",
    embeds: "Chat Embed",
    "embed-chats": "Chat Embed History",
    security: "Security",
    "event-logs": "Event Logs",
    privacy: "Privacy & Data",
    "ai-providers": "AI Providers",
    "agent-skills": "Agent Skills",
    admin: "Admin",
    tools: "Tools",
    "experimental-features": "Experimental Features",
    contact: "Contact Support",
    "browser-extension": "Browser Extension",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "Welcome to",
      "placeholder-username": "Username",
      "placeholder-password": "Password",
      login: "Login",
      validating: "Validating...",
      "forgot-pass": "Forgot password",
      reset: "Reset",
    },
    "sign-in": {
      start: "Sign in to your",
      end: "account.",
    },
    "password-reset": {
      title: "Password Reset",
      description:
        "Provide the necessary information below to reset your password.",
      "recovery-codes": "Recovery Codes",
      "recovery-code": "Recovery Code {{index}}",
      "back-to-login": "Back to Login",
    },
  },

  welcomeMessage: {
    part1:
      "Welcome to Athena!\nAthena is your intelligent workplace assistant, designed to help you quickly find answers from important documents. You don’t need to upload anything—we have already trained it on the necessary in-house knowledge base so you can simply ask questions and get relevant information instantly.",
    part2:
      "Athena is the easiest way to put powerful AI products like OpenAi, GPT-4, LangChain, PineconeDB, ChromaDB, and other services together in a neat package with no fuss to increase your productivity by 100x.",
    part3:
      "Athena can run totally locally on your machine with little overhead you wont even notice it's there! No GPU needed. Cloud and on-premises installation is available as well.\nThe AI tooling ecosystem gets more powerful everyday. Athena makes it easy to use.",
    githubIssue: "Create an issue on Github",
    user1: "How do I get started?!",
    part4:
      'It’s easy! All documents are organized into "Workspaces," which contain carefully prepared information. Just type your question, and Athena will find the most relevant details for you.',
    createWorkspace: "Create your first workspace",
    user2:
      "Is this like a smart search tool? Can I chat with it like a chatbot?",
    part5:
      "Yes! Athena works in two ways:\n\n<i>Quick Search:</i> Ask a question, and Athena will find the best answer based on the available knowledge base.\n<i>Conversational Mode:</i> Have a back-and-forth chat where Athena remembers the context of your questions and provides more detailed responses as you go.\nYou can switch between these modes anytime while chatting!",
    user3: "This sounds great! Let me try it out already!",
    part6:
      "Go ahead and explore! Athena is here to make finding information effortless. For any further assistance, feel free to reach out to us. Have fun!",
    starOnGithub: "Star on GitHub",
    contact: "Contact Athena",
  },

  "new-workspace": {
    title: "New Workspace",
    placeholder: "My Workspace",
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "General Settings",
    chat: "Chat Settings",
    vector: "Vector Database",
    members: "Members",
    agent: "Agent Configuration",
  },

  // General Appearance
  general: {
    vector: {
      title: "Vector Count",
      description: "Total number of vectors in your vector database.",
    },
    names: {
      description: "This will only change the display name of your workspace.",
    },
    message: {
      title: "Suggested Chat Messages",
      description:
        "Customize the messages that will be suggested to your workspace users.",
      add: "Add new message",
      save: "Save Messages",
      heading: "Explain to me",
      body: "the benefits of Athena",
    },
    pfp: {
      title: "Assistant Profile Image",
      description:
        "Customize the profile image of the assistant for this workspace.",
      image: "Workspace Image",
      remove: "Remove Workspace Image",
    },
    delete: {
      title: "Delete Workspace",
      description:
        "Delete this workspace and all of its data. This will delete the workspace for all users.",
      delete: "Delete Workspace",
      deleting: "Deleting Workspace...",
      "confirm-start": "You are about to delete your entire",
      "confirm-end":
        "workspace. This will remove all vector embeddings in your vector database.\n\nThe original source files will remain untouched. This action is irreversible.",
    },
  },

  // Chat Settings
  chat: {
    llm: {
      title: "Workspace LLM Provider",
      description:
        "The specific LLM provider & model that will be used for this workspace. By default, it uses the system LLM provider and settings.",
      search: "Search all LLM providers",
    },
    model: {
      title: "Workspace Chat model",
      description:
        "The specific chat model that will be used for this workspace. If empty, will use the system LLM preference.",
      wait: "-- waiting for models --",
    },
    mode: {
      title: "Chat mode",
      chat: {
        title: "Chat",
        "desc-start": "will provide answers with the LLM's general knowledge",
        and: "and",
        "desc-end": "document context that is found.",
      },
      query: {
        title: "Query",
        "desc-start": "will provide answers",
        only: "only",
        "desc-end": "if document context is found.",
      },
    },
    history: {
      title: "Chat History",
      "desc-start":
        "The number of previous chats that will be included in the response's short-term memory.",
      recommend: "Recommend 20. ",
      "desc-end":
        "Anything more than 45 is likely to lead to continuous chat failures depending on message size.",
    },
    prompt: {
      title: "Prompt",
      description:
        "The prompt that will be used on this workspace. Define the context and instructions for the AI to generate a response. You should to provide a carefully crafted prompt so the AI can generate a relevant and accurate response.",
    },
    refusal: {
      title: "Query mode refusal response",
      "desc-start": "When in",
      query: "query",
      "desc-end":
        "mode, you may want to return a custom refusal response when no context is found.",
    },
    temperature: {
      title: "LLM Temperature",
      "desc-start":
        'This setting controls how "creative" your LLM responses will be.',
      "desc-end":
        "The higher the number the more creative. For some models this can lead to incoherent responses when set too high.",
      hint: "Most LLMs have various acceptable ranges of valid values. Consult your LLM provider for that information.",
    },
  },

  // Vector Database
  "vector-workspace": {
    identifier: "Vector database identifier",
    snippets: {
      title: "Max Context Snippets",
      description:
        "This setting controls the maximum amount of context snippets the will be sent to the LLM for per chat or query.",
      recommend: "Recommended: 4",
    },
    doc: {
      title: "Document similarity threshold",
      description:
        "The minimum similarity score required for a source to be considered related to the chat. The higher the number, the more similar the source must be to the chat.",
      zero: "No restriction",
      low: "Low (similarity score ≥ .25)",
      medium: "Medium (similarity score ≥ .50)",
      high: "High (similarity score ≥ .75)",
    },
    reset: {
      reset: "Reset Vector Database",
      resetting: "Clearing vectors...",
      confirm:
        "You are about to reset this workspace's vector database. This will remove all vector embeddings currently embedded.\n\nThe original source files will remain untouched. This action is irreversible.",
      error: "Workspace vector database could not be reset!",
      success: "Workspace vector database was reset!",
    },
  },

  // Agent Configuration
  agent: {
    "performance-warning":
      "Performance of LLMs that do not explicitly support tool-calling is highly dependent on the model's capabilities and accuracy. Some abilities may be limited or non-functional.",
    provider: {
      title: "Workspace Agent LLM Provider",
      description:
        "The specific LLM provider & model that will be used for this workspace's @agent agent.",
    },
    mode: {
      chat: {
        title: "Workspace Agent Chat model",
        description:
          "The specific chat model that will be used for this workspace's @agent agent.",
      },
      title: "Workspace Agent model",
      description:
        "The specific LLM model that will be used for this workspace's @agent agent.",
      wait: "-- waiting for models --",
    },

    skill: {
      title: "Default agent skills",
      description:
        "Improve the natural abilities of the default agent with these pre-built skills. This set up applies to all workspaces.",
      rag: {
        title: "RAG & long-term memory",
        description:
          'Allow the agent to leverage your local documents to answer a query or ask the agent to "remember" pieces of content for long-term memory retrieval.',
      },
      view: {
        title: "View & summarize documents",
        description:
          "Allow the agent to list and summarize the content of workspace files currently embedded.",
      },
      scrape: {
        title: "Scrape websites",
        description:
          "Allow the agent to visit and scrape the content of websites.",
      },
      generate: {
        title: "Generate charts",
        description:
          "Enable the default agent to generate various types of charts from data provided or given in chat.",
      },
      save: {
        title: "Generate & save files to browser",
        description:
          "Enable the default agent to generate and write to files that save and can be downloaded in your browser.",
      },
      web: {
        title: "Live web search and browsing",
        "desc-start":
          "Enable your agent to search the web to answer your questions by connecting to a web-search (SERP) provider.",
        "desc-end":
          "Web search during agent sessions will not work until this is set up.",
      },
    },
  },

  // Workspace Chats
  recorded: {
    title: "Workspace Chats",
    description:
      "These are all the recorded chats and messages that have been sent by users ordered by their creation date.",
    export: "Export",
    table: {
      id: "Id",
      by: "Sent By",
      workspace: "Workspace",
      prompt: "Prompt",
      response: "Response",
      at: "Sent At",
    },
  },

  // Appearance
  appearance: {
    title: "Appearance",
    description: "Customize the appearance settings of your platform.",
    logo: {
      title: "Customize Logo",
      description: "Upload your custom logo to make your chatbot yours.",
      add: "Add a custom logo",
      recommended: "Recommended size: 800 x 200",
      remove: "Remove",
      replace: "Replace",
    },
    message: {
      title: "Customize Messages",
      description: "Customize the automatic messages displayed to your users.",
      new: "New",
      system: "system",
      user: "user",
      message: "message",
      assistant: "Athena Chat Assistant",
      "double-click": "Double click to edit...",
      save: "Save Messages",
    },
    icons: {
      title: "Custom Footer Icons",
      description:
        "Customize the footer icons displayed on the bottom of the sidebar.",
      icon: "Icon",
      link: "Link",
    },
  },

  // API Keys
  api: {
    title: "API Keys",
    description:
      "API keys allow the holder to programmatically access and manage this Athena instance.",
    link: "Read the API documentation",
    generate: "Generate New API Key",
    table: {
      key: "API Key",
      by: "Created By",
      created: "Created",
    },
  },

  llm: {
    title: "LLM Preference",
    description:
      "These are the credentials and settings for your preferred LLM chat & embedding provider. Its important these keys are current and correct or else Athena will not function properly.",
    provider: "LLM Provider",
  },

  transcription: {
    title: "Transcription Model Preference",
    description:
      "These are the credentials and settings for your preferred transcription model provider. Its important these keys are current and correct or else media files and audio will not transcribe.",
    provider: "Transcription Provider",
    "warn-start":
      "Using the local whisper model on machines with limited RAM or CPU can stall Athena when processing media files.",
    "warn-recommend":
      "We recommend at least 2GB of RAM and upload files <10Mb.",
    "warn-end":
      "The built-in model will automatically download on the first use.",
  },

  embedding: {
    title: "Embedding Preference",
    "desc-start":
      "When using an LLM that does not natively support an embedding engine - you may need to additionally specify credentials to for embedding text.",
    "desc-end":
      "Embedding is the process of turning text into vectors. These credentials are required to turn your files and prompts into a format which Athena can use to process.",
    provider: {
      title: "Embedding Provider",
      description:
        "There is no set up required when using Athena's native embedding engine.",
    },
  },

  text: {
    title: "Text splitting & Chunking Preferences",
    "desc-start":
      "Sometimes, you may want to change the default way that new documents are split and chunked before being inserted into your vector database.",
    "desc-end":
      "You should only modify this setting if you understand how text splitting works and it's side effects.",
    "warn-start": "Changes here will only apply to",
    "warn-center": "newly embedded documents",
    "warn-end": ", not existing documents.",
    size: {
      title: "Text Chunk Size",
      description:
        "This is the maximum length of characters that can be present in a single vector.",
      recommend: "Embed model maximum length is",
    },

    overlap: {
      title: "Text Chunk Overlap",
      description:
        "This is the maximum overlap of characters that occurs during chunking between two adjacent text chunks.",
    },
  },

  // Vector Database
  vector: {
    title: "Vector Database",
    description:
      "These are the credentials and settings for how your Athena instance will function. It's important these keys are current and correct.",
    provider: {
      title: "Vector Database Provider",
      description: "There is no configuration needed for LanceDB.",
    },
  },

  // Embeddable Chat Widgets
  embeddable: {
    title: "Embeddable Chat Widgets",
    description:
      "Embeddable chat widgets are public facing chat interfaces that are tied to a single workspace. These allow you to build workspaces that then you can publish to the world.",
    create: "Create embed",
    table: {
      workspace: "Workspace",
      chats: "Sent Chats",
      Active: "Active Domains",
    },
  },

  "embed-chats": {
    title: "Embed Chats",
    export: "Export",
    description:
      "These are all the recorded chats and messages from any embed that you have published.",
    table: {
      embed: "Embed",
      sender: "Sender",
      message: "Message",
      response: "Response",
      at: "Sent At",
    },
  },

  multi: {
    title: "Multi-User Mode",
    description:
      "Set up your instance to support your team by activating Multi-User Mode.",
    enable: {
      "is-enable": "Multi-User Mode is Enabled",
      enable: "Enable Multi-User Mode",
      description:
        "By default, you will be the only admin. As an admin you will need to create accounts for all new users or admins. Do not lose your password as only an Admin user can reset passwords.",
      username: "Admin account username",
      password: "Admin account password",
    },
    password: {
      title: "Password Protection",
      description:
        "Protect your Athena instance with a password. If you forget this there is no recovery method so ensure you save this password.",
    },
    instance: {
      title: "Password Protect Instance",
      description:
        "By default, you will be the only admin. As an admin you will need to create accounts for all new users or admins. Do not lose your password as only an Admin user can reset passwords.",
      password: "Instance password",
    },
  },

  // Event Logs
  event: {
    title: "Event Logs",
    description:
      "View all actions and events happening on this instance for monitoring.",
    clear: "Clear Event Logs",
    table: {
      type: "Event Type",
      user: "User",
      occurred: "Occurred At",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "Privacy & Data-Handling",
    description:
      "This is your configuration for how connected third party providers and Athena handle your data.",
    llm: "LLM Selection",
    embedding: "Embedding Preference",
    vector: "Vector Database",
    anonymous: "Anonymous Telemetry Enabled",
  },
};

export default TRANSLATIONS;

const TRANSLATIONS = {
  common: {
    "workspaces-name": "نام فضای کار",
    error: "خطا",
    success: "موفق",
    user: "کاربر",
    selection: "انتخاب مدل",
    saving: "در حال ذخیره...",
    save: "ذخیره تغییرات",
    previous: "صفحه قبلی",
    next: "صفحه بعدی",
  },

  // Setting Sidebar menu items.
  settings: {
    title: "تنظیمات سامانه",
    system: "تنظیمات عمومی",
    invites: "دعوت‌نامه‌ها",
    users: "کاربران",
    workspaces: "فضاهای کاری",
    "workspace-chats": "گفتگوهای فضای کاری",
    customization: "شخصی‌سازی",
    "api-keys": "API توسعه‌دهندگان",
    llm: "مدل زبانی",
    transcription: "رونویسی",
    embedder: "جاسازی",
    "text-splitting": "تقسیم متن و تکه‌بندی",
    "voice-speech": "صدا و گفتار",
    "vector-database": "پایگاه داده برداری",
    embeds: "جاسازی گفتگو",
    "embed-chats": "تاریخچه گفتگوهای جاسازی شده",
    security: "امنیت",
    "event-logs": "گزارش رویدادها",
    privacy: "حریم خصوصی و داده‌ها",
    "ai-providers": "ارائه‌دهندگان هوش مصنوعی",
    "agent-skills": "مهارت‌های عامل",
    admin: "مدیریت",
    tools: "ابزارها",
    "experimental-features": "ویژگی‌های آزمایشی",
    contact: "تماس با پشتیبانی",
    "browser-extension": "افزونه مرورگر",
  },

  // Page Definitions
  login: {
    "multi-user": {
      welcome: "خوش آمدید به",
      "placeholder-username": "نام کاربری",
      "placeholder-password": "رمز عبور",
      login: "ورود",
      validating: "در حال اعتبارسنجی...",
      "forgot-pass": "فراموشی رمز عبور",
      reset: "بازنشانی",
    },
    "sign-in": {
      start: "ورود به حساب",
      end: "کاربری شما.",
    },
    "password-reset": {
      title: "بازنشانی رمز عبور",
      description: "برای بازنشانی رمز عبور خود، اطلاعات لازم را وارد کنید.",
      "recovery-codes": "کدهای بازیابی",
      "recovery-code": "کد بازیابی {{index}}",
      "back-to-login": "بازگشت به صفحه ورود",
    },
  },

  welcomeMessage: {
    part1:
      "به  خوش آمدید.  یک ابزار هوش مصنوعی متن‌باز توسط Athena است که هر چیزی را به یک ربات گفتگوی آموزش‌دیده تبدیل می‌کند که می‌توانید با آن گفتگو و پرس‌وجو کنید.  یک نرم‌افزار BYOK (آوردن کلیدهای خودتان) است، بنابراین هیچ اشتراک، هزینه یا مبلغی برای این نرم‌افزار خارج از سرویس‌هایی که می‌خواهید با آن استفاده کنید، وجود ندارد.",
    part2:
      " ساده‌ترین راه برای کنار هم قرار دادن محصولات قدرتمند هوش مصنوعی مانند OpenAI، GPT-4، LangChain، PineconeDB، ChromaDB و سایر سرویس‌ها در یک بسته منظم و بدون دردسر برای افزایش بهره‌وری شما تا ۱۰۰ برابر است.",
    part3:
      " می‌تواند کاملاً به صورت محلی روی دستگاه شما با حداقل مصرف منابع اجرا شود، طوری که حتی متوجه حضور آن نخواهید شد! نیازی به GPU نیست. نصب ابری و درون‌سازمانی نیز در دسترس است.\nاکوسیستم ابزارهای هوش مصنوعی هر روز قدرتمندتر می‌شود.  استفاده از آن را آسان می‌کند.",
    githubIssue: "ایجاد مسئله در گیت‌هاب",
    user1: "چطور شروع کنم؟!",
    part4:
      "خیلی ساده است. تمام مجموعه‌ها در سطل‌هایی که ما «فضای کاری» می‌نامیم سازماندهی شده‌اند. فضاهای کاری، سطل‌هایی از فایل‌ها، اسناد، تصاویر، PDF‌ها و سایر فایل‌ها هستند که به چیزی تبدیل می‌شوند که LLM‌ها می‌توانند درک کنند و در مکالمه استفاده کنند.\n\nشما می‌توانید در هر زمان فایل‌ها را اضافه و حذف کنید.",
    createWorkspace: "ایجاد اولین فضای کاری",
    user2:
      "آیا این مثل یک دراپ‌باکس هوشمند است یا چیز دیگری؟ پس گفتگو چی؟ مگر این یک ربات گفتگو نیست؟",
    part5:
      " بیشتر از یک دراپ‌باکس هوشمند است.\n\n دو روش برای صحبت با داده‌های شما ارائه می‌دهد:\n\n<i>پرس‌وجو:</i> گفتگوهای شما داده‌ها یا استنباط‌های یافت شده در اسناد فضای کاری که به آن دسترسی دارد را برمی‌گرداند. افزودن اسناد بیشتر به فضای کاری آن را هوشمندتر می‌کند!\n\n<i>مکالمه‌ای:</i> اسناد شما + تاریخچه گفتگوی جاری شما هر دو همزمان به دانش LLM کمک می‌کنند. برای افزودن اطلاعات متنی بلادرنگ یا اصلاح اشتباهات و سوءتفاهم‌هایی که LLM ممکن است داشته باشد، عالی است.\n\nشما می‌توانید بین هر دو حالت \n<i>در وسط گفتگو!</i> جابجا شوید.",
    user3: "وای، این عالی به نظر می‌رسد، بگذارید همین حالا امتحانش کنم!",
    part6: "خوش بگذره!",
    starOnGithub: "ستاره در گیت‌هاب",
    contact: "تماس با Athena",
  },

  "new-workspace": {
    title: "فضای کاری جدید",
    placeholder: "فضای کاری من",
  },

  // Workspace Settings menu items
  "workspaces—settings": {
    general: "تنظیمات عمومی",
    chat: "تنظیمات گفتگو",
    vector: "پایگاه داده برداری",
    members: "اعضا",
    agent: "پیکربندی عامل",
  },

  // General Appearance
  general: {
    vector: {
      title: "تعداد بردارها",
      description: "تعداد کل بردارها در پایگاه داده برداری شما.",
    },
    names: {
      description: "این فقط نام نمایشی فضای کاری شما را تغییر خواهد داد.",
    },
    message: {
      title: "پیام‌های گفتگوی پیشنهادی",
      description:
        "پیام‌هایی که به کاربران فضای کاری پیشنهاد می‌شود را شخصی‌سازی کنید.",
      add: "افزودن پیام جدید",
      save: "ذخیره پیام‌ها",
      heading: "برایم توضیح بده",
      body: "مزایای  را",
    },
    pfp: {
      title: "تصویر پروفایل دستیار",
      description: "تصویر پروفایل دستیار را برای این فضای کاری شخصی‌سازی کنید.",
      image: "تصویر فضای کاری",
      remove: "حذف تصویر فضای کاری",
    },
    delete: {
      title: "حذف فضای کاری",
      description:
        "این فضای کاری و تمام داده‌های آن را حذف کنید. این کار فضای کاری را برای همه کاربران حذف خواهد کرد.",
      delete: "حذف فضای کاری",
      deleting: "در حال حذف فضای کاری...",
      "confirm-start": "شما در حال حذف کامل",
      "confirm-end":
        "فضای کاری هستید. این کار تمام جاسازی‌های برداری را از پایگاه داده برداری شما حذف خواهد کرد.\n\nفایل‌های اصلی منبع دست نخورده باقی خواهند ماند. این عمل برگشت‌ناپذیر است.",
    },
  },

  // Chat Settings
  chat: {
    llm: {
      title: "ارائه‌دهنده LLM فضای کاری",
      description:
        "ارائه‌دهنده و مدل LLM خاصی که برای این فضای کاری استفاده خواهد شد. به طور پیش‌فرض، از ارائه‌دهنده و تنظیمات LLM سیستم استفاده می‌کند.",
      search: "جستجوی تمام ارائه‌دهندگان LLM",
    },
    model: {
      title: "مدل گفتگوی فضای کاری",
      description:
        "مدل گفتگوی خاصی که برای این فضای کاری استفاده خواهد شد. اگر خالی باشد، از ترجیحات LLM سیستم استفاده خواهد کرد.",
      wait: "-- در انتظار مدل‌ها --",
    },
    mode: {
      title: "حالت گفتگو",
      chat: {
        title: "گفتگو",
        "desc-start": "پاسخ‌ها را با دانش عمومی LLM",
        and: "و",
        "desc-end": "محتوای اسناد یافت شده ارائه می‌دهد.",
      },
      query: {
        title: "پرس‌وجو",
        "desc-start": "پاسخ‌ها را",
        only: "فقط",
        "desc-end": "در صورت یافتن محتوای اسناد ارائه می‌دهد.",
      },
    },
    history: {
      title: "تاریخچه گفتگو",
      "desc-start":
        "تعداد گفتگوهای قبلی که در حافظه کوتاه‌مدت پاسخ گنجانده خواهد شد.",
      recommend: "پیشنهاد: ۲۰. ",
      "desc-end":
        "بیش از ۴۵ احتمالاً منجر به شکست مداوم گفتگو می‌شود که به اندازه پیام‌ها بستگی دارد.",
    },
    prompt: {
      title: "پیش‌متن",
      description:
        "پیش‌متنی که در این فضای کاری استفاده خواهد شد. زمینه و دستورالعمل‌ها را برای تولید پاسخ توسط هوش مصنوعی تعریف کنید. باید یک پیش‌متن دقیق ارائه دهید تا هوش مصنوعی بتواند پاسخی مرتبط و دقیق تولید کند.",
    },
    refusal: {
      title: "پاسخ رد در حالت پرس‌وجو",
      "desc-start": "در حالت",
      query: "پرس‌وجو",
      "desc-end":
        "ممکن است بخواهید هنگامی که هیچ محتوایی یافت نمی‌شود، یک پاسخ رد سفارشی برگردانید.",
    },
    temperature: {
      title: "دمای LLM",
      "desc-start":
        'این تنظیم میزان "خلاقیت" پاسخ‌های LLM شما را کنترل می‌کند.',
      "desc-end":
        "هر چه عدد بالاتر باشد، خلاقیت بیشتر است. برای برخی مدل‌ها، تنظیم بسیار بالا می‌تواند منجر به پاسخ‌های نامفهوم شود.",
      hint: "اکثر LLMها محدوده‌های مختلفی از مقادیر معتبر را دارند. برای این اطلاعات به ارائه‌دهنده LLM خود مراجعه کنید.",
    },
  },

  // Vector Database
  "vector-workspace": {
    identifier: "شناسه پایگاه داده برداری",
    snippets: {
      title: "حداکثر قطعات متنی",
      description:
        "این تنظیم حداکثر تعداد قطعات متنی که برای هر گفتگو یا پرس‌وجو به LLM ارسال می‌شود را کنترل می‌کند.",
      recommend: "پیشنهادی: 4",
    },
    doc: {
      title: "آستانه شباهت سند",
      description:
        "حداقل امتیاز شباهت مورد نیاز برای اینکه یک منبع مرتبط با گفتگو در نظر گرفته شود. هر چه عدد بالاتر باشد، منبع باید شباهت بیشتری با گفتگو داشته باشد.",
      zero: "بدون محدودیت",
      low: "پایین (امتیاز شباهت ≥ .25)",
      medium: "متوسط (امتیاز شباهت ≥ .50)",
      high: "بالا (امتیاز شباهت ≥ .75)",
    },
    reset: {
      reset: "بازنشانی پایگاه داده برداری",
      resetting: "در حال پاک کردن بردارها...",
      confirm:
        "شما در حال بازنشانی پایگاه داده برداری این فضای کاری هستید. این کار تمام جاسازی‌های برداری فعلی را حذف خواهد کرد.\n\nفایل‌های اصلی منبع دست نخورده باقی خواهند ماند. این عمل برگشت‌ناپذیر است.",
      error: "بازنشانی پایگاه داده برداری فضای کاری امکان‌پذیر نبود!",
      success: "پایگاه داده برداری فضای کاری بازنشانی شد!",
    },
  },

  // Agent Configuration
  agent: {
    "performance-warning":
      "عملکرد LLMهایی که به طور صریح از فراخوانی ابزار پشتیبانی نمی‌کنند، به شدت به قابلیت‌ها و دقت مدل وابسته است. برخی توانایی‌ها ممکن است محدود یا غیرفعال باشند.",
    provider: {
      title: "ارائه‌دهنده LLM عامل فضای کاری",
      description:
        "ارائه‌دهنده و مدل LLM خاصی که برای عامل @agent این فضای کاری استفاده خواهد شد.",
    },
    mode: {
      chat: {
        title: "مدل گفتگوی عامل فضای کاری",
        description:
          "مدل گفتگوی خاصی که برای عامل @agent این فضای کاری استفاده خواهد شد.",
      },
      title: "مدل عامل فضای کاری",
      description:
        "مدل LLM خاصی که برای عامل @agent این فضای کاری استفاده خواهد شد.",
      wait: "-- در انتظار مدل‌ها --",
    },
    skill: {
      title: "مهارت‌های پیش‌فرض عامل",
      description:
        "توانایی‌های طبیعی عامل پیش‌فرض را با این مهارت‌های از پیش ساخته شده بهبود دهید. این تنظیمات برای تمام فضاهای کاری اعمال می‌شود.",
      rag: {
        title: "RAG و حافظه بلندمدت",
        description:
          'به عامل اجازه دهید از اسناد محلی شما برای پاسخ به پرس‌وجو استفاده کند یا از عامل بخواهید قطعات محتوا را برای بازیابی حافظه بلندمدت "به خاطر بسپارد".',
      },
      view: {
        title: "مشاهده و خلاصه‌سازی اسناد",
        description:
          "به عامل اجازه دهید محتوای فایل‌های جاسازی شده فعلی فضای کاری را فهرست و خلاصه کند.",
      },
      scrape: {
        title: "استخراج از وب‌سایت‌ها",
        description:
          "به عامل اجازه دهید محتوای وب‌سایت‌ها را بازدید و استخراج کند.",
      },
      generate: {
        title: "تولید نمودارها",
        description:
          "به عامل پیش‌فرض امکان تولید انواع مختلف نمودار از داده‌های ارائه شده یا داده شده در گفتگو را بدهید.",
      },
      save: {
        title: "تولید و ذخیره فایل‌ها در مرورگر",
        description:
          "به عامل پیش‌فرض امکان تولید و نوشتن در فایل‌هایی که ذخیره می‌شوند و می‌توانند در مرورگر شما دانلود شوند را بدهید.",
      },
      web: {
        title: "جستجو و مرور زنده وب",
        "desc-start":
          "با اتصال به یک ارائه‌دهنده جستجوی وب (SERP)، به عامل خود امکان جستجو در وب برای پاسخ به سؤالات خود را بدهید.",
        "desc-end":
          "جستجوی وب در طول جلسات عامل تا زمانی که این تنظیم نشود، کار نخواهد کرد.",
      },
    },
  },

  // Workspace Chats
  recorded: {
    title: "گفتگوهای فضای کاری",
    description:
      "این‌ها تمام گفتگوها و پیام‌های ثبت شده هستند که توسط کاربران ارسال شده‌اند و بر اساس تاریخ ایجاد مرتب شده‌اند.",
    export: "خروجی‌گیری",
    table: {
      id: "شناسه",
      by: "ارسال شده توسط",
      workspace: "فضای کاری",
      prompt: "درخواست",
      response: "پاسخ",
      at: "زمان ارسال",
    },
  },

  // Appearance
  appearance: {
    title: "ظاهر",
    description: "تنظیمات ظاهری پلتفرم خود را شخصی‌سازی کنید.",
    logo: {
      title: "شخصی‌سازی لوگو",
      description: "لوگوی سفارشی خود را برای شخصی‌سازی ربات گفتگو آپلود کنید.",
      add: "افزودن لوگوی سفارشی",
      recommended: "اندازه پیشنهادی: 800 x 200",
      remove: "حذف",
      replace: "جایگزینی",
    },
    message: {
      title: "شخصی‌سازی پیام‌ها",
      description:
        "پیام‌های خودکار نمایش داده شده به کاربران را شخصی‌سازی کنید.",
      new: "جدید",
      system: "سیستم",
      user: "کاربر",
      message: "پیام",
      assistant: "دستیار گفتگوی ",
      "double-click": "برای ویرایش دوبار کلیک کنید...",
      save: "ذخیره پیام‌ها",
    },
    icons: {
      title: "آیکون‌های سفارشی پاورقی",
      description:
        "آیکون‌های نمایش داده شده در پایین نوار کناری را شخصی‌سازی کنید.",
      icon: "آیکون",
      link: "لینک",
    },
  },

  // API Keys
  api: {
    title: "کلیدهای API",
    description:
      "کلیدهای API به دارنده آن‌ها اجازه می‌دهند به صورت برنامه‌نویسی به این نمونه  دسترسی داشته و آن را مدیریت کنند.",
    link: "مطالعه مستندات API",
    generate: "ایجاد کلید API جدید",
    table: {
      key: "کلید API",
      by: "ایجاد شده توسط",
      created: "تاریخ ایجاد",
    },
  },

  llm: {
    title: "ترجیحات مدل زبانی",
    description:
      "این‌ها اعتبارنامه‌ها و تنظیمات ارائه‌دهنده مدل زبانی و جاسازی انتخابی شما هستند. مهم است که این کلیدها به‌روز و صحیح باشند در غیر این صورت  به درستی کار نخواهد کرد.",
    provider: "ارائه‌دهنده مدل زبانی",
  },

  transcription: {
    title: "ترجیحات مدل رونویسی",
    description:
      "این‌ها اعتبارنامه‌ها و تنظیمات ارائه‌دهنده مدل رونویسی انتخابی شما هستند. مهم است که این کلیدها به‌روز و صحیح باشند در غیر این صورت فایل‌های رسانه و صوتی رونویسی نخواهند شد.",
    provider: "ارائه‌دهنده رونویسی",
    "warn-start":
      "استفاده از مدل محلی Whisper روی دستگاه‌هایی با RAM یا CPU محدود می‌تواند هنگام پردازش فایل‌های رسانه‌ای باعث توقف  شود.",
    "warn-recommend":
      "ما حداقل ۲ گیگابایت RAM و آپلود فایل‌های کمتر از ۱۰ مگابایت را توصیه می‌کنیم.",
    "warn-end": "مدل داخلی در اولین استفاده به صورت خودکار دانلود خواهد شد.",
  },

  embedding: {
    title: "ترجیحات جاسازی",
    "desc-start":
      "هنگام استفاده از یک LLM که به طور پیش‌فرض از موتور جاسازی پشتیبانی نمی‌کند - ممکن است نیاز به تعیین اعتبارنامه‌های اضافی برای جاسازی متن داشته باشید.",
    "desc-end":
      "جاسازی فرآیند تبدیل متن به بردارها است. این اعتبارنامه‌ها برای تبدیل فایل‌ها و درخواست‌های شما به فرمتی که  بتواند پردازش کند، ضروری هستند.",
    provider: {
      title: "ارائه‌دهنده جاسازی",
      description:
        "هنگام استفاده از موتور جاسازی داخلی  نیازی به تنظیمات نیست.",
    },
  },

  text: {
    title: "تقسیم متن و تکه‌بندی",
    "desc-start":
      "تقسیم متن به شما امکان می‌دهد اسناد بزرگ را به بخش‌های کوچک‌تر تقسیم کنید که برای جاسازی و پردازش مناسب‌تر هستند.",
    "desc-end":
      "سعی کنید تعادلی بین اندازه بخش و همپوشانی ایجاد کنید تا از دست رفتن اطلاعات را به حداقل برسانید.",
    "warn-start": "تغییر این مقادیر نیاز به",
    "warn-center": "پردازش مجدد تمام اسناد",
    "warn-end": "خواهد داشت.",
    size: {
      title: "حداکثر اندازه بخش",
      description:
        "این حداکثر تعداد کاراکترهایی است که می‌تواند در یک بردار وجود داشته باشد.",
      recommend: "حداکثر طول مدل جاسازی",
    },
    overlap: {
      title: "همپوشانی بخش‌های متن",
      description:
        "این حداکثر همپوشانی کاراکترها است که در هنگام تکه‌بندی بین دو بخش متن مجاور رخ می‌دهد.",
    },
  },

  // Vector Database
  vector: {
    title: "پایگاه داده برداری",
    description:
      "این‌ها اعتبارنامه‌ها و تنظیمات نحوه عملکرد نمونه  شما هستند. مهم است که این کلیدها به‌روز و صحیح باشند.",
    provider: {
      title: "ارائه‌دهنده پایگاه داده برداری",
      description: "برای LanceDB نیازی به پیکربندی نیست.",
    },
  },

  // Embeddable Chat Widgets
  embeddable: {
    title: "جاسازی گفتگو",
    description:
      "جاسازی گفتگو به شما امکان می‌دهد گفتگوی فضای کاری را در وب‌سایت یا برنامه خود قرار دهید.",
    create: "ایجاد جاسازی جدید",
    table: {
      workspace: "فضای کاری",
      chats: "گفتگوهای ارسال شده",
      Active: "دامنه‌های فعال",
    },
  },

  "embed-chats": {
    title: "گفتگوهای جاسازی شده",
    export: "خروجی‌گیری",
    description:
      "این لیست تمام گفتگوها و پیام‌های ثبت شده از هر جاسازی که منتشر کرده‌اید را نشان می‌دهد.",
    table: {
      embed: "جاسازی",
      sender: "فرستنده",
      message: "پیام",
      response: "پاسخ",
      at: "زمان ارسال",
    },
  },

  multi: {
    title: "حالت چند کاربره",
    description:
      "نمونه خود را برای پشتیبانی از تیم خود با فعال‌سازی حالت چند کاربره تنظیم کنید.",
    enable: {
      "is-enable": "حالت چند کاربره فعال است",
      enable: "فعال‌سازی حالت چند کاربره",
      description:
        "به طور پیش‌فرض، شما تنها مدیر خواهید بود. به عنوان مدیر، باید برای تمام کاربران یا مدیران جدید حساب کاربری ایجاد کنید. رمز عبور خود را گم نکنید زیرا فقط یک کاربر مدیر می‌تواند رمزهای عبور را بازنشانی کند.",
      username: "نام کاربری حساب مدیر",
      password: "رمز عبور حساب مدیر",
    },
    password: {
      title: "حفاظت با رمز عبور",
      description:
        "از نمونه  خود با رمز عبور محافظت کنید. اگر این رمز را فراموش کنید هیچ روش بازیابی وجود ندارد، پس حتماً این رمز عبور را ذخیره کنید.",
    },
    instance: {
      title: "محافظت از نمونه با رمز عبور",
      description:
        "به طور پیش‌فرض، شما تنها مدیر خواهید بود. به عنوان مدیر، باید برای تمام کاربران یا مدیران جدید حساب کاربری ایجاد کنید. رمز عبور خود را گم نکنید زیرا فقط یک کاربر مدیر می‌تواند رمزهای عبور را بازنشانی کند.",
      password: "رمز عبور نمونه",
    },
  },

  // Event Logs
  event: {
    title: "گزارش رویدادها",
    description:
      "مشاهده تمام اقدامات و رویدادهای در حال وقوع در این نمونه برای نظارت.",
    clear: "پاک کردن گزارش رویدادها",
    table: {
      type: "نوع رویداد",
      user: "کاربر",
      occurred: "زمان وقوع",
    },
  },

  // Privacy & Data-Handling
  privacy: {
    title: "حریم خصوصی و مدیریت داده‌ها",
    description:
      "این پیکربندی شما برای نحوه مدیریت داده‌ها توسط ارائه‌دهندگان شخص ثالث متصل و  است.",
    llm: "انتخاب مدل زبانی",
    embedding: "ترجیحات جاسازی",
    vector: "پایگاه داده برداری",
    anonymous: "ارسال تله‌متری ناشناس فعال است",
  },
};

export default TRANSLATIONS;

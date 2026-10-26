/* =========================================================
   黑洞便利店 · Black Hole Mart
   Vanilla JS, no dependencies.
   ========================================================= */

"use strict";

const PRODUCTS = [
  {
    id: "mood-soda",
    emoji: "🫧",
    name: "情绪气泡水",
    en: "MOOD SODA",
    tag: "情绪补给",
    desc: "喝一口，把老板的话变成背景音。气泡在舌尖破裂的声音，像极了下班打卡。",
    effect: "将 90% 的阴阳怪气翻译成“咕噜咕噜”。",
    side: "打嗝会冒出粉色泡泡，持续到下一个会议结束。",
    crowd: "职场忍者、会议潜水员、靠冰美式续命的人。",
    review: "“现在开会像在水族馆，老板的声音很远，气泡很近。”",
    price: "9.9",
    color: "#ffe45c",
    stars: 4.8,
  },
  {
    id: "quantum-slippers",
    emoji: "🩴",
    name: "量子拖鞋",
    en: "QUANTUM SLIPPERS",
    tag: "居家玄学",
    desc: "穿上它，你同时出现在上班路上和被窝里。至于打卡，交给另一个你。",
    effect: "双脚自动选择更舒服的那条时间线。",
    side: "可能左右脚踩进不同的宇宙，袜子永远配不成对。",
    crowd: "周一早八人、起床困难户、PPT 赶工人。",
    review: "“所以迟到的是另一个我，扣工资的也是另一个我。”",
    price: "19.9",
    color: "#c9d2ff",
    stars: 4.9,
  },
  {
    id: "regret-gummy",
    emoji: "🍬",
    name: "后悔药软糖",
    en: "REGRET GUMMY",
    tag: "深夜限定",
    desc: "专治“刚才那句话”。含在嘴里三秒，尴尬自动溶解。",
    effect: "让三秒前的发言撤回成一句“哈哈”。",
    side: "甜味只持续到明天，但记忆会在凌晨三点回来。",
    crowd: "深夜聊天选手、已读乱回患者、嘴比脑子快的人。",
    review: "“已回购，但不敢在领导面前吃。”",
    price: "6.6",
    color: "#f4bdde",
    stars: 4.6,
  },
  {
    id: "slack-ring",
    emoji: "🛟",
    name: "摸鱼泳圈",
    en: "SLACK RING",
    tag: "摸鱼装备",
    desc: "在会议深海里优雅漂浮。别人卷项目，你卷泳姿。",
    effect: "自动屏蔽“简单同步一下”。",
    side: "可能顺着网线漂到下班时间。",
    crowd: "会议潜水员、周报表演艺术家、工位哲学家。",
    review: "“今天浮了三个会，体力消耗为零。”",
    price: "19.9",
    color: "#bde3f2",
    stars: 4.9,
  },
  {
    id: "later-clock",
    emoji: "⏰",
    name: "拖延闹钟",
    en: "LATER O CLOCK",
    tag: "时间管理",
    desc: "会在你准备努力时，温柔地提醒你再刷五分钟。它是闹钟，也是同谋。",
    effect: "将“马上”精确延长至 4 小时。",
    side: "截止日期会突然出现在梦里，并追着你跑。",
    crowd: "截止日期冲浪者、灵感型选手、整点开工派。",
    review: "“它比我更懂我，甚至替我按了稍后提醒。”",
    price: "0.5",
    color: "#ffd3a1",
    stars: 4.4,
  },
  {
    id: "shy-cloak",
    emoji: "🧥",
    name: "社恐隐形斗篷",
    en: "SHY CLOAK",
    tag: "社交糊弄",
    desc: "电量刚好撑过一次电梯寒暄。披上它，你就是人群里最自然的背景。",
    effect: "让“吃了吗”自动变成点头。",
    side: "遇到熟人时可能短暂失灵，并在原地石化的你。",
    crowd: "电梯间幸存者、饭局边缘人、消息已读不回协会。",
    review: "“电梯里只有我，和我的安全感。”",
    price: "29.9",
    color: "#b9e7cd",
    stars: 4.7,
  },
  {
    id: "compliment-machine",
    emoji: "📣",
    name: "自动夸夸机",
    en: "COMPLIMENT-O-MATIC",
    tag: "精神状态",
    desc: "每 30 秒夸你一次，绝不重复。它不关心你做了什么，只关心你还在。",
    effect: "提供 24 小时无理由赞美。",
    side: "深夜可能开始夸你的拖鞋和黑眼圈。",
    crowd: "缺能量的人、刚被生活捏过的人、需要一点点光的人。",
    review: "“它说我的黑眼圈很有故事，我差点信了。”",
    price: "4.8",
    color: "#ffe45c",
    stars: 5.0,
  },
  {
    id: "ex-eraser",
    emoji: "🧽",
    name: "前任记忆橡皮擦",
    en: "EX-ERASER",
    tag: "深夜限定",
    desc: "擦掉聊天记录、合照和那些“如果当时”。副作用是 Wi-Fi 密码也没了。",
    effect: "删除 99% 的深夜小作文。",
    side: "可能误删外卖软件登录状态，以及你刚点的夜宵。",
    crowd: "刚分手的手滑党、爱翻旧账的人、凌晨三点不睡觉的人。",
    review: "“谢谢，现在我只记得要交房租。”",
    price: "15.0",
    color: "#ffc5b2",
    stars: 4.5,
  },
  {
    id: "no-overthink",
    emoji: "🧿",
    name: "反内耗护身符",
    en: "NO-OVERTHINK CHARM",
    tag: "精神状态",
    desc: "内含 100 句“关我什么事”。戴上它，世界会安静一点点，刚好够你呼吸。",
    effect: "把反复咀嚼变成一次性吞咽。",
    side: "偶尔会对 KPI 和群消息也失去兴趣。",
    crowd: "高敏人群、内耗型选手、睡前复盘专家。",
    review: "“戴上后，世界安静得有点不习惯，但很舒服。”",
    price: "8.8",
    color: "#d9d1ff",
    stars: 4.9,
  },
  {
    id: "lieflat-charger",
    emoji: "🔌",
    name: "躺平充电桩",
    en: "LIE-FLAT CHARGER",
    tag: "居家玄学",
    desc: "插上后，世界自动静音 10 分钟。请放心，天塌下来也有高个子先顶着。",
    effect: "快速补充被会议抽走的灵魂。",
    side: "可能一充就是一整个下午，醒来已是晚饭。",
    crowd: "电量 1% 的人、午休消失术爱好者、沙发原生居民。",
    review: "“充完电，继续给生活打工，但好像没那么气了。”",
    price: "11.0",
    color: "#c9d2ff",
    stars: 4.8,
  },
  {
    id: "monday-shelter",
    emoji: "🏠",
    name: "周一避难所",
    en: "MONDAY SHELTER",
    tag: "周一特供",
    desc: "仅周一营业，周日晚上开始排队。门后面有一张床、一杯热水和一整天的“别找我”。",
    effect: "提供 8 小时合法失踪。",
    side: "周二会收到 47 条未读和 3 个“在吗”。",
    crowd: "周日焦虑症患者、周一闹钟恐惧者、开工前需要仪式感的人。",
    review: "“门后面有张床，我哭了，然后睡到了下午。”",
    price: "99.0",
    color: "#ffd3a1",
    stars: 4.9,
  },
  {
    id: "meow-buds",
    emoji: "🎧",
    name: "猫猫翻译耳机",
    en: "MEOW BUDS",
    tag: "宇宙特供",
    desc: "戴上就能听懂猫主子的三种核心需求：饿了、困了、开罐罐。狗语需另购。",
    effect: "把“喵”精准翻译成人类可执行的指令。",
    side: "也可能听懂它在骂你，并因此失眠一整晚。",
    crowd: "铲屎官、云吸猫患者、被猫 PUA 的人类。",
    review: "“原来它每天都在敷衍我，但罐头一开就真诚了。”",
    price: "39.9",
    color: "#f4bdde",
    stars: 4.7,
  },
  {
    id: "multiverse-remote",
    emoji: "📺",
    name: "平行宇宙遥控器",
    en: "MULTIVERSE REMOTE",
    tag: "宇宙特供",
    desc: "频道 3 是你没辞职的那条时间线，频道 7 是你勇敢表白的那天。遥控器总在最关键的时候没电。",
    effect: "随时偷看另一种人生，不用买票。",
    side: "看着看着，会对自己的这版剧情产生一点怀疑。",
    crowd: "选择困难户、平行宇宙爱好者、凌晨两点的人生复盘师。",
    review: "“还是现在这版画质好一点，虽然剧情拖沓。”",
    price: "13.0",
    color: "#bde3f2",
    stars: 5.0,
  },
  {
    id: "feed-invisible",
    emoji: "🌫️",
    name: "朋友圈隐身喷雾",
    en: "FEED-INVISIBLE",
    tag: "社交糊弄",
    desc: "喷完秒变“仅自己可见”。尽情发疯，体面留在外面。",
    effect: "让你放心发疯不发圈，情绪有地方去。",
    side: "也可能让暗恋对象、新同事和你想被看见的人看不到你。",
    crowd: "深夜表达欲旺盛者、朋友圈精装修业主、发完就后悔的人。",
    review: "“发完就喷，体面人必备，虽然偶尔有点孤独。”",
    price: "5.2",
    color: "#ffe45c",
    stars: 4.5,
  },
  {
    id: "soul-resignation",
    emoji: "📄",
    name: "精神离职通知书",
    en: "SOUL RESIGNATION",
    tag: "职场续命",
    desc: "身体还在工位，灵魂已经环游世界。请注意：此商品不改变考勤记录。",
    effect: "在工位上开启免打扰模式，顺便给灵魂放个假。",
    side: "周报会写得像旅行日记，老板可能会问你在哪。",
    crowd: "带薪发呆选手、会议背景板、已读不回的职场诗人。",
    review: "“今天去冰岛开了个会，信号不太好，正好。”",
    price: "0",
    color: "#ffc5b2",
    stars: 4.8,
  },
  {
    id: "sleep-installment",
    emoji: "🛌",
    name: "睡眠分期付款",
    en: "SLEEP INSTALLMENT",
    tag: "睡眠专区",
    desc: "今晚先睡 20%，明早再补。把熬夜拆成可承受的小份，利息是第二天的黑眼圈。",
    effect: "让“再刷五分钟”变成一个可分期的小目标。",
    side: "分了三期，依然没还完；凌晨的你会觉得这很划算。",
    crowd: "报复性熬夜党、睡前短视频选手、明早一定早睡的人。",
    review: "“分了三期，还是没还完，但至少今晚睡了 20%。”",
    price: "7.7",
    color: "#c9d2ff",
    stars: 4.3,
  },
  {
    id: "merit-box",
    emoji: "🪙",
    name: "赛博功德箱",
    en: "CYBER MERIT BOX",
    tag: "精神状态",
    desc: "投一枚硬币，获得 8 小时内心平静。自动回向给周三的 PPT 和楼下那只流浪猫。",
    effect: "让焦虑暂时找到投币口，叮一声。",
    side: "只收硬币，不收借口；零钱不够时请自助深呼吸。",
    crowd: "会议前紧张的人、PPT 玄学信徒、需要一点仪式感的人。",
    review: "“投了五块，PPT 自己长了两页，可能是心理作用。”",
    price: "1.0",
    color: "#ffe45c",
    stars: 4.6,
  },
  {
    id: "worker-armor",
    emoji: "🦺",
    name: "打工人复活甲",
    en: "WORKER ARMOR",
    tag: "职场续命",
    desc: "被生活击倒后，原地复活并附带一句“算了吧”。冷却时间：一整个周末。",
    effect: "抵挡一次周一暴击，护甲值 +1。",
    side: "复活了，但没完全活；灵魂可能还在加载中。",
    crowd: "连续加班选手、需求变更受害者、工位上的不死鸟。",
    review: "“复活了，但没完全活，先点杯奶茶吧。”",
    price: "25.0",
    color: "#b9e7cd",
    stars: 4.9,
  },
  {
    id: "eight-am-portal",
    emoji: "🌀",
    name: "早八传送门",
    en: "8AM PORTAL",
    tag: "时间管理",
    desc: "单程票，目的地：被窝。省去起床到出门的 40 分钟，代价是可能传送到会议室。",
    effect: "把通勤压缩成一眨眼，顺便跳过洗脸。",
    side: "有 5% 概率传送到公司厕所或教室后门，导航失灵的后果自负。",
    crowd: "踩点艺术家、早八幸存者、闹钟免疫体质。",
    review: "“今天传送到公司厕所，也算准时，甚至更清醒。”",
    price: "3.9",
    color: "#bde3f2",
    stars: 4.4,
  },
  {
    id: "nonsense-engine",
    emoji: "🗣️",
    name: "废话文学生成器",
    en: "NONSENSE ENGINE",
    tag: "社交糊弄",
    desc: "输出的每句话都很有道理，但没什么用。适合回答“在吗”和任何需要表态的场合。",
    effect: "轻松应对一切“随便”“都行”“你定”。",
    side: "可能把自己也绕进去，最后忘了本来要说什么。",
    crowd: "社交糊弄学大师、群聊潜水员、需要填充空白的人。",
    review: "“听君一席话，如听一席话，但气氛确实缓和了。”",
    price: "2.5",
    color: "#ffd3a1",
    stars: 4.7,
  },
  {
    id: "pause-button",
    emoji: "⏸️",
    name: "时间暂停按钮",
    en: "PAUSE BUTTON",
    tag: "时间管理",
    desc: "只在你不想起床时有效。按下后，闹钟后的五分钟可以无限延长。",
    effect: "把被窝里的五分钟拉长成一个小型假期。",
    side: "暂停期间工资也暂停，老板在门外的时间不暂停。",
    crowd: "起床困难户、回笼觉研究员、被窝原住民。",
    review: "“按了半小时，老板在门外按了半小时，我们都很有耐心。”",
    price: "9.0",
    color: "#d9d1ff",
    stars: 4.2,
  },
  {
    id: "boss-radar",
    emoji: "📡",
    name: "老板雷达",
    en: "BOSS RADAR",
    tag: "职场续命",
    desc: "提前 10 秒预警“在吗”。检测半径 50 米内的“方便吗”，以及走廊尽头的脚步声。",
    effect: "提前进入忙碌状态，桌面瞬间专业。",
    side: "可能误报外卖和快递，让你白紧张一场。",
    crowd: "工位敏感肌、摸鱼特工、开会前才打开文档的人。",
    review: "“比天气预报准，至少它从来不迟到。”",
    price: "14.9",
    color: "#c9d2ff",
    stars: 4.8,
  },
  {
    id: "air-fryer",
    emoji: "🍟",
    name: "空气炸锅自由",
    en: "AIR-FRYER PASS",
    tag: "居家玄学",
    desc: "炸一切，包括你的焦虑。剩菜、速冻食品和坏心情，都能炸成脆的。",
    effect: "把冰箱边角料变成一顿有尊严的夜宵。",
    side: "厨房会永久留下炸鸡味，邻居可能来敲门。",
    crowd: "深夜嘴馋星人、厨房实验家、空气炸锅原教旨主义者。",
    review: "“焦虑没熟，薯条糊了，但心情确实脆了一点。”",
    price: "21.0",
    color: "#ffc5b2",
    stars: 4.9,
  },
  {
    id: "uninstall-key",
    emoji: "🗝️",
    name: "一键卸载",
    en: "UNINSTALL KEY",
    tag: "精神状态",
    desc: "卸载的不是 App，是今天的坏情绪。释放 2.3GB 心理内存，给明天腾点地方。",
    effect: "一键清理情绪缓存和反复播放的尴尬回忆。",
    side: "可能把明天的待办也一起卸了，周一再装回来。",
    crowd: "内存不足的人、情绪缓存爆满者、需要重新开机的人。",
    review: "“现在轻盈，除了房租和未读消息。”",
    price: "6.0",
    color: "#b9e7cd",
    stars: 4.6,
  },
  {
    id: "dopamine-clerk",
    emoji: "🍭",
    name: "多巴胺补货员",
    en: "DOPAMINE CLERK",
    tag: "情绪补给",
    desc: "随时补货，快乐缺货自动提醒。五分钟后送到一小份开心，附带一张手写贴纸。",
    effect: "在你快没电时，送来一口甜的和一句“你辛苦了”。",
    side: "快乐来得快去得也快，可能还需要补第二包。",
    crowd: "情绪低库存、连续阴天、需要被小事情捞起来的人。",
    review: "“补了一包，够撑到下班，甚至够分给同事一颗。”",
    price: "18.8",
    color: "#ffe45c",
    stars: 5.0,
  },
  {
    id: "clearhead-serum",
    emoji: "🧪",
    name: "人间清醒药水",
    en: "CLEARHEAD SERUM",
    tag: "深夜限定",
    desc: "副作用：太清醒。喝下后能看穿所有画饼、“以后”和“下次一定”。",
    effect: "一秒识别“这是为你好”和“年轻人多锻炼”。",
    side: "可能对周一过敏，并想在凌晨提交辞职信。",
    crowd: "恋爱脑临时工、职场清醒剂依赖者、刚看完聊天记录的人。",
    review: "“喝完把工作群退了，又加回来了，但心态不一样了。”",
    price: "16.6",
    color: "#f4bdde",
    stars: 4.7,
  },
  {
    id: "self-doubt-off",
    emoji: "🔆",
    name: "自我怀疑消除器",
    en: "SELF-DOUBT OFF",
    tag: "精神状态",
    desc: "按下后：你本来就很行。不是鸡汤，是出厂设置。",
    effect: "把“我不配”改成“我看看”，再改成“我可以”。",
    side: "偶尔自信过头，请先别辞职，也别立刻表白。",
    crowd: "准备开口的人、刚被拒绝的人、需要一点点推力的人。",
    review: "“按了三天，开始投简历了。第四天，面试官说下周见。”",
    price: "10.0",
    color: "#ffd3a1",
    stars: 5.0,
  },
  {
    id: "cyber-fish",
    emoji: "🐟",
    name: "电子木鱼 Pro",
    en: "CYBER FISH PRO",
    tag: "精神玄学",
    desc: "敲一下，烦恼 -1，电量 -1%。108 次心平气和，附赠一个“功德 +1”的动画。",
    effect: "提供 108 次短促而真诚的内心平静。",
    side: "需要每天充电；敲到 80 下手机没电时，烦恼可能还在。",
    crowd: "地铁暴躁乘客、会议前的自己、需要手指忙起来的人。",
    review: "“敲到 80 下手机没电了，烦恼也没了，可能一起没的。”",
    price: "8.1",
    color: "#bde3f2",
    stars: 4.8,
  },
  {
    id: "monday-note",
    emoji: "📝",
    name: "周一请假条生成器",
    en: "MONDAY NOTE",
    tag: "周一特供",
    desc: "一键生成无法拒绝的请假理由，真诚度 98%。剩下 2% 留给你的表情管理。",
    effect: "在周日晚上提前解决周一的第一个难题。",
    side: "老板可能也有同款，并且用得比你熟练。",
    crowd: "周一恐惧症、临时有事星人、需要喘口气的人。",
    review: "“批了，老板说他也要用，让我把链接发他。”",
    price: "4.0",
    color: "#ffc5b2",
    stars: 4.7,
  },
  {
    id: "colleague-shield",
    emoji: "🛡️",
    name: "同事屏蔽器",
    en: "COLLEAGUE SHIELD",
    tag: "职场续命",
    desc: "只屏蔽声音，不屏蔽工作。键盘声、闲聊和电话铃会变成海边白噪音。",
    effect: "把开放式工位改造成一个人的安静海岛。",
    side: "可能连午饭邀请一起屏蔽，最后一个人吃外卖。",
    crowd: "开放式工位难民、需要深度专注的人、社交电量低的人。",
    review: "“安静了，但更孤独了，不过效率真的高了。”",
    price: "22.0",
    color: "#d9d1ff",
    stars: 4.5,
  },
  {
    id: "infinite-coffee",
    emoji: "☕",
    name: "无限续杯咖啡",
    en: "INFINITE COFFEE",
    tag: "情绪补给",
    desc: "杯底写着：今天也辛苦了。每一次喝完都会自动满上，凌晨三点仍能背诵公司愿景。",
    effect: "提供无限续杯的陪伴，以及短暂的全能感。",
    side: "可能看见宇宙，也可能看见自己的心电图。",
    crowd: "咖啡续命人、赶方案选手、需要热饮的人。",
    review: "“喝到第 9 杯，看到了宇宙，也看到了明天的待办。”",
    price: "5.5",
    color: "#ffd3a1",
    stars: 4.9,
  },
  {
    id: "fate-tissue",
    emoji: "🧻",
    name: "命运抽纸",
    en: "FATE TISSUE",
    tag: "深夜限定",
    desc: "每抽一张，都是“再等等”。给所有犹豫不决一个柔软的缓冲。",
    effect: "为每个决定争取一点时间，哪怕只是一张纸的厚度。",
    side: "可能把最佳时机也一起抽走，只剩一垃圾桶的“下次”。",
    crowd: "不敢按发送的人、反复编辑消息的人、需要一点时间的人。",
    review: "“抽了一包，机会走了，但我也没那么难过了。”",
    price: "1.5",
    color: "#b9e7cd",
    stars: 4.3,
  },
  {
    id: "slack-bar",
    emoji: "📊",
    name: "摸鱼进度条",
    en: "SLACK BAR",
    tag: "摸鱼装备",
    desc: "15:00 准时加载到 99%，然后在离下班还有 5 分钟时卡住。",
    effect: "让下午的时间拥有加速器，会议显得没那么长。",
    side: "被领导看见时会自动卡在 0%，并弹出“正在加载”。",
    crowd: "下午三点人、临近下班观察员、工位上的计时器。",
    review: "“加载到 99% 的时候被叫去开会，回来发现下班了。”",
    price: "3.3",
    color: "#c9d2ff",
    stars: 4.6,
  },
  {
    id: "chill-drop",
    emoji: "💧",
    name: "情绪稳定剂",
    en: "CHILL DROP",
    tag: "情绪补给",
    desc: "主要成分：下班。辅料：热饭、沙发和不需要回复的消息。",
    effect: "保持 8 小时情绪稳定，像一片没有风的海。",
    side: "遇到加班会失效，药效在打卡那一刻才真正开始。",
    crowd: "成年人类、通勤战士、今晚不想说话的人。",
    review: "“下班那一刻，药效才真正开始，连地铁都顺眼了。”",
    price: "30.0",
    color: "#b9e7cd",
    stars: 4.9,
  },
  {
    id: "commute-card",
    emoji: "🚇",
    name: "通勤瞬移卡",
    en: "COMMUTE CARD",
    tag: "通勤必备",
    desc: "有效期：闹钟响后五分钟。把地铁一小时压缩成一眨眼，灵魂可能还在家。",
    effect: "省去换乘、挤车和站台上的自我怀疑。",
    side: "无法避开早高峰的人流，且可能和另一个你撞肩。",
    crowd: "跨城打工人、换乘马拉松选手、每天多睡五分钟的人。",
    review: "“到了公司，灵魂还在家，但身体已经开机了。”",
    price: "7.0",
    color: "#ffe45c",
    stars: 4.7,
  },
  {
    id: "client-mind",
    emoji: "👁️",
    name: "甲方读心术",
    en: "CLIENT MIND",
    tag: "乙方专用",
    desc: "读取结果：五彩斑斓的黑。提前三天知道要改哪版，也提前三天想改行。",
    effect: "让你在甲方开口前准备好第 18 版方案。",
    side: "知道得越多，越想改行；读心术不提供转行补贴。",
    crowd: "设计幸存者、乙方文案、Adobe 全家桶用户。",
    review: "“读完了，想辞职，但先把第 18 版发过去。”",
    price: "44.0",
    color: "#ffc5b2",
    stars: 4.4,
  },
  {
    id: "life-undo",
    emoji: "↩️",
    name: "人生撤销键",
    en: "LIFE CTRL Z",
    tag: "时间管理",
    desc: "只撤销“刚才那句话”。让尴尬从未发生，让你重新做一次体面的人。",
    effect: "一键撤回社交事故，附带一次深呼吸。",
    side: "无法撤销“已发送”和“已读”，也无法撤销昨晚的宵夜。",
    crowd: "嘴比脑子快的人、群聊手滑党、深夜发言选手。",
    review: "“昨天撤销了 11 次，今天继续，人生就是不断 Ctrl+Z。”",
    price: "2.0",
    color: "#d9d1ff",
    stars: 4.8,
  },
  {
    id: "social-battery",
    emoji: "🔋",
    name: "社交电量充电宝",
    en: "SOCIAL POWER BANK",
    tag: "社交糊弄",
    desc: "充 5 分钟，撑 5 句话。让你在聚会上撑到最后一份甜点，回家后自动关机。",
    effect: "为内向星人提供临时社交电量，够用就好。",
    side: "回家后会进入长时间待机，消息回得比平时更慢。",
    crowd: "内向星人、聚会边缘人、需要体面退场的人。",
    review: "“撑到了甜点，值了，回家充了一整晚。”",
    price: "9.5",
    color: "#bde3f2",
    stars: 4.7,
  },
  {
    id: "dream-cam",
    emoji: "🎞️",
    name: "梦境录像机",
    en: "DREAM CAM",
    tag: "宇宙特供",
    desc: "一键录下昨晚的梦，保存为 4K 视频。回看时会发现逻辑完全不通，但你确实飞过。",
    effect: "把荒诞梦境做成可回放的私人电影。",
    side: "可能录到自己在考试、赶车或变成一台打印机。",
    crowd: "爱做梦的人、醒来就忘的人、想给朋友看证据的人。",
    review: "“梦见自己是一台打印机，还在赶工，醒来后很累。”",
    price: "20.0",
    color: "#f4bdde",
    stars: 4.9,
  },
  {
    id: "air-takeout",
    emoji: "🥡",
    name: "空气外卖",
    en: "AIR TAKEOUT",
    tag: "情绪补给",
    desc: "什么都不送来，但让你觉得快到了。用期待感撑过 30 分钟，打开袋子只有风。",
    effect: "为等待提供一种轻盈的陪伴，钱包也轻了。",
    side: "骑手到了，你的饭没到；风很新鲜，胃很诚实。",
    crowd: "饿到失去判断的人、深夜点单选手、相信“马上到”的人。",
    review: "“骑手到了，我的饭没到，但我已经不想吃了。”",
    price: "0.1",
    color: "#ffd3a1",
    stars: 4.2,
  },
];

const RARE_PRODUCTS = [
  {
    id: "manager-cat",
    emoji: "🐈‍⬛",
    name: "店长的猫",
    en: "THE MANAGER",
    tag: "隐藏款 · 店长本长",
    desc: "它才是这家店真正的老板。商品、货架和这行字，都是它默许存在的。",
    effect: "提供 24 小时毛茸茸的陪伴，且不收取任何费用。",
    side: "需要持续上供小鱼干；它可能在你打字时踩过键盘。",
    crowd: "所有需要被治愈的人、猫派、以及正在看这句话的你。",
    review: "“摸了两下，它翻了个身，算是批准我摸第三下。”",
    price: "—",
    unit: "非卖品",
    color: "#ffe45c",
    stars: 5.0,
    rare: true,
  },
  {
    id: "yesterday",
    emoji: "🌗",
    name: "昨天",
    en: "YESTERDAY",
    tag: "隐藏款 · 时空旧货",
    desc: "限量一件，已被昨天买走。包装里只剩一点回声，和没来得及说的话。",
    effect: "允许你把今天倒回 23:59，再来一次。",
    side: "使用后可能忘记为什么想回去，也可能忘了带钥匙。",
    crowd: "总在深夜说“如果”的人、错过末班车的人、想重来一次的人。",
    review: "“我没买到。它说，明天再来。”",
    price: "??",
    unit: "已售罄",
    color: "#c9d2ff",
    stars: 4.9,
    rare: true,
  },
  {
    id: "singular-store",
    emoji: "🕳️",
    name: "本店店址",
    en: "THE SINGULARITY",
    tag: "隐藏款 · 固定资产",
    desc: "本店就开在它边上，租金为零。它吞掉一切，包括购物小票和你的坏心情。",
    effect: "吞掉所有烦恼、小票和前任的照片，安静得像没发生过。",
    side: "靠近时请抓紧购物袋；导航在事件视界内会失效。",
    crowd: "想消失一会儿的地球人、深夜不睡的人、宇宙尽头打工人。",
    review: "“找不到出口，但 Wi-Fi 信号很好，店长也在。”",
    price: "∞",
    unit: "非卖品",
    color: "#ffc5b2",
    stars: 5.0,
    rare: true,
  },
];

const ALL_PRODUCTS = [...PRODUCTS, ...RARE_PRODUCTS];
const PRODUCT_MAP = new Map(ALL_PRODUCTS.map((product) => [product.id, product]));
const STORAGE_KEY = "blackhole-mart.v1";
const RARE_CHANCE = 0.075;

const state = {
  collection: [],
  soundOn: true,
  day: "",
  todayCount: 0,
  catPets: 0,
  current: null,
  isRare: false,
  isDrawing: false,
  mode: "daily",
};

const el = {};
let audioContext = null;
let toastTimer = null;
let printTimer = null;
let catBubbleTimer = null;
let copyDialogHintMarkup = "";

function $(id) {
  return document.getElementById(id);
}

function pad(value) {
  return String(value).padStart(2, "0");
}

function dayKey(date = new Date()) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}

function formatTimestamp(date = new Date()) {
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())}　${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function currentSerial() {
  return String(state.todayCount).padStart(4, "0");
}

function dailyProduct() {
  const key = dayKey();
  let hash = 0;
  for (let index = 0; index < key.length; index += 1) {
    hash = (hash * 31 + key.charCodeAt(index)) >>> 0;
  }
  return PRODUCTS[hash % PRODUCTS.length];
}

function cacheElements() {
  el.machine = $("machine");
  el.drawButton = $("drawButton");
  el.drawLabel = el.drawButton.querySelector(".draw-label");
  el.lever = $("lever");
  el.againButton = $("againButton");
  el.copyButton = $("copyButton");
  el.copyDialog = $("copyDialog");
  el.copyDialogText = $("copyDialogText");
  el.copyDialogHint = $("copyDialogHint");
  el.retryCopy = $("retryCopy");
  el.closeCopyDialog = $("closeCopyDialog");
  el.dismissCopy = $("dismissCopy");
  el.soundToggle = $("soundToggle");
  el.soundLabel = $("soundLabel");
  el.shopCat = $("shopCat");
  el.todayCount = $("todayCount");
  el.collectionStat = $("collectionStat");
  el.collectionTotal = $("collectionTotal");
  el.vaultCount = $("vaultCount");
  el.progressLabel = $("progressLabel");
  el.progressBar = $("progressBar");
  el.vaultGrid = $("vaultGrid");
  el.vaultEmpty = $("vaultEmpty");
  el.clearVault = $("clearVault");
  el.receiptWrap = $("receiptWrap");
  el.receipt = $("receipt");
  el.receiptSticker = $("receiptSticker");
  el.receiptDate = $("receiptDate");
  el.receiptNo = $("receiptNo");
  el.productEmoji = $("productEmoji");
  el.productTag = $("productTag");
  el.productName = $("productName");
  el.productEn = $("productEn");
  el.productPrice = $("productPrice");
  el.productUnit = $("productUnit");
  el.productDesc = $("productDesc");
  el.productEffect = $("productEffect");
  el.productSide = $("productSide");
  el.productFor = $("productFor");
  el.productReview = $("productReview");
  el.stars = $("stars");
  el.barcode = $("barcode");
  el.barcodeText = $("barcodeText");
  el.toast = $("toast");
  el.confettiLayer = $("confettiLayer");
  el.heartLayer = $("heartLayer");
  el.liveRegion = $("liveRegion");
  el.machineTray = el.machine.querySelector(".machine-tray");
}

/* ---------- persistence ---------- */

function loadState() {
  let saved = null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    saved = raw ? JSON.parse(raw) : null;
  } catch (error) {
    saved = null;
  }

  const today = dayKey();
  const storedCollection = Array.isArray(saved?.collection) ? saved.collection : [];
  state.collection = [...new Set(storedCollection)].filter((id) => PRODUCT_MAP.has(id));
  state.soundOn = saved?.soundOn !== false;
  state.catPets = Number.isFinite(saved?.catPets) ? saved.catPets : 0;
  state.day = today;
  state.todayCount = saved?.day === today && Number.isFinite(saved?.todayCount) ? saved.todayCount : 0;

  const savedProduct = typeof saved?.currentId === "string" ? PRODUCT_MAP.get(saved.currentId) : null;
  if (savedProduct) {
    state.current = savedProduct;
    state.isRare = Boolean(savedProduct.rare);
    state.mode = "restore";
    return;
  }

  state.current = dailyProduct();
  state.isRare = Boolean(state.current.rare);
  state.mode = "daily";
}

function persistState() {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        collection: state.collection,
        soundOn: state.soundOn,
        day: state.day,
        todayCount: state.todayCount,
        catPets: state.catPets,
        currentId: state.current ? state.current.id : null,
      }),
    );
  } catch (error) {
    /* Local storage can be unavailable in private or local-file contexts. */
  }
}

/* ---------- sound ---------- */

function ensureAudio() {
  if (!state.soundOn) {
    return null;
  }

  const AudioCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioCtor) {
    return null;
  }

  if (!audioContext) {
    try {
      audioContext = new AudioCtor();
    } catch (error) {
      return null;
    }
  }

  if (audioContext.state === "suspended") {
    audioContext.resume().catch(() => {});
  }

  return audioContext;
}

function tone(frequency, startOffset, duration, options = {}) {
  const ctx = ensureAudio();
  if (!ctx) {
    return;
  }

  const { type = "sine", volume = 0.03, endFrequency = null } = options;
  const start = ctx.currentTime + startOffset;
  const oscillator = ctx.createOscillator();
  const gain = ctx.createGain();

  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  if (endFrequency) {
    oscillator.frequency.exponentialRampToValueAtTime(Math.max(20, endFrequency), start + duration);
  }

  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);

  oscillator.connect(gain);
  gain.connect(ctx.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.03);
}

function playLeverSound() {
  tone(150, 0, 0.08, { type: "square", volume: 0.018, endFrequency: 95 });
  tone(86, 0.08, 0.15, { type: "triangle", volume: 0.025, endFrequency: 58 });
  tone(220, 0.24, 0.06, { type: "square", volume: 0.012, endFrequency: 180 });
}

function playRevealSound(isRare) {
  const notes = isRare ? [523.25, 659.25, 783.99, 1046.5, 1318.5] : [523.25, 659.25, 783.99];
  notes.forEach((frequency, index) => {
    tone(frequency, 0.06 + index * 0.085, 0.3, {
      type: "sine",
      volume: isRare ? 0.032 : 0.025,
    });
  });
  if (isRare) {
    tone(261.63, 0.06, 0.7, { type: "triangle", volume: 0.018 });
  }
}

function playCatPurr() {
  tone(88, 0, 0.22, { type: "triangle", volume: 0.018, endFrequency: 70 });
  tone(76, 0.13, 0.24, { type: "triangle", volume: 0.014, endFrequency: 63 });
}

function playToggleSound(on) {
  if (!on) {
    return;
  }
  tone(660, 0, 0.08, { type: "sine", volume: 0.02 });
  tone(880, 0.07, 0.12, { type: "sine", volume: 0.018 });
}

/* ---------- receipt rendering ---------- */

function makeSeed(input) {
  let hash = 2166136261;
  for (let index = 0; index < input.length; index += 1) {
    hash ^= input.charCodeAt(index);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function seededRandom(seed) {
  let value = seed >>> 0;
  return function random() {
    value += 0x6d2b79f5;
    let result = value;
    result = Math.imul(result ^ (result >>> 15), result | 1);
    result ^= result + Math.imul(result ^ (result >>> 7), result | 61);
    return ((result ^ (result >>> 14)) >>> 0) / 4294967296;
  };
}

function renderBarcode(seedText) {
  const random = seededRandom(makeSeed(seedText));
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 46; index += 1) {
    const bar = document.createElement("span");
    const widths = [1, 1, 2, 2, 3, 3, 4];
    bar.style.width = `${widths[Math.floor(random() * widths.length)]}px`;
    if (random() < 0.18) {
      bar.style.opacity = "0.55";
    }
    fragment.appendChild(bar);
  }

  el.barcode.replaceChildren(fragment);
}

function stickerForMode(product, mode, fromVault) {
  if (product.rare) {
    return "隐藏款 · 恭喜";
  }
  if (fromVault) {
    return "仓库翻出";
  }
  if (mode === "draw") {
    return "新鲜出炉";
  }
  if (mode === "restore") {
    return "上次抽到";
  }
  return "今日到货";
}

function renderProduct(product, options = {}) {
  const { mode = state.mode, print = false, fromVault = false } = options;

  state.current = product;
  state.isRare = Boolean(product.rare);
  state.mode = mode;

  const isRare = Boolean(product.rare);
  el.receiptWrap.style.setProperty("--accent", product.color);
  el.receiptWrap.classList.toggle("is-rare", isRare);
  el.receipt.classList.toggle("is-rare", isRare);

  const serial = currentSerial();
  const now = new Date();
  const shortDate = `${pad(now.getMonth() + 1)}${pad(now.getDate())}`;

  el.receiptDate.textContent = formatTimestamp(now);
  el.receiptNo.textContent = `NO. 404-${shortDate}-${serial}${isRare ? "R" : ""}`;
  el.receiptSticker.textContent = stickerForMode(product, mode, fromVault);
  el.productEmoji.textContent = product.emoji;
  el.productTag.textContent = product.tag;
  el.productName.textContent = product.name;
  el.productEn.textContent = product.en;
  el.productPrice.textContent = product.price;
  el.productUnit.textContent = product.unit || "宇宙币";
  el.productDesc.textContent = product.desc;
  el.productEffect.textContent = product.effect;
  el.productSide.textContent = product.side;
  el.productFor.textContent = product.crowd;
  el.productReview.textContent = product.review;
  el.stars.innerHTML = `★★★★★ <b>${product.stars.toFixed(1)}</b>`;
  el.barcodeText.textContent = `404 ${shortDate} ${serial} · BHM`;
  renderBarcode(`${product.id}-${shortDate}-${serial}-${state.collection.length}`);

  updateActiveVaultItem();

  if (print) {
    el.receiptWrap.classList.remove("is-printing");
    el.productEmoji.classList.remove("is-popping");
    // Force a style flush so the print and badge animations can replay.
    void el.receiptWrap.offsetWidth;
    void el.productEmoji.offsetWidth;
    el.receiptWrap.classList.add("is-printing");
    el.productEmoji.classList.add("is-popping");

    window.clearTimeout(printTimer);
    printTimer = window.setTimeout(() => {
      el.receiptWrap.classList.remove("is-printing");
      el.productEmoji.classList.remove("is-popping");
    }, 800);
  }

  el.liveRegion.textContent = `已展示 ${product.name}。${product.desc}`;
}

/* ---------- vault ---------- */

function updateActiveVaultItem() {
  const activeId = state.current ? state.current.id : "";
  el.vaultGrid.querySelectorAll(".vault-item").forEach((item) => {
    const isActive = item.dataset.id === activeId;
    item.classList.toggle("is-active", isActive);
    if (isActive) {
      item.setAttribute("aria-current", "true");
    } else {
      item.removeAttribute("aria-current");
    }
  });
}

function updateStats() {
  const total = ALL_PRODUCTS.length;
  const found = state.collection.length;
  const percent = total ? Math.round((found / total) * 100) : 0;

  el.todayCount.textContent = String(state.todayCount);
  el.collectionStat.textContent = String(found);
  el.collectionTotal.textContent = String(total);
  el.vaultCount.textContent = String(found).padStart(2, "0");
  el.progressLabel.textContent = `${found} / ${total}`;
  el.progressBar.style.width = `${percent}%`;
  el.progressBar.parentElement.setAttribute("aria-label", `收集进度 ${found} / ${total}`);
}

function makeVaultItem(product, index, newId) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "vault-item";
  button.dataset.id = product.id;
  button.style.setProperty("--accent", product.color);
  button.setAttribute("aria-label", `查看 ${product.name}`);
  button.title = `${product.name} · ${product.price} ${product.unit || "宇宙币"}`;

  if (product.rare) {
    button.classList.add("is-rare");
  }
  if (state.current && state.current.id === product.id) {
    button.classList.add("is-active");
    button.setAttribute("aria-current", "true");
  }
  if (product.id === newId) {
    button.classList.add("is-new");
  }

  const indexLabel = document.createElement("span");
  indexLabel.className = "vault-index";
  indexLabel.textContent = String(index + 1).padStart(2, "0");

  const emoji = document.createElement("span");
  emoji.className = "vault-emoji";
  emoji.setAttribute("aria-hidden", "true");
  emoji.textContent = product.emoji;

  const name = document.createElement("span");
  name.className = "vault-name";
  name.textContent = product.name;

  const meta = document.createElement("span");
  meta.className = "vault-price";
  meta.textContent = `${product.price} ${product.unit || "宇宙币"} · ★ ${product.stars.toFixed(1)}`;

  button.append(indexLabel, emoji, name, meta);
  return button;
}

function renderVault(newId = null) {
  const fragment = document.createDocumentFragment();
  state.collection.forEach((id, index) => {
    const product = PRODUCT_MAP.get(id);
    if (product) {
      fragment.appendChild(makeVaultItem(product, index, newId));
    }
  });

  el.vaultGrid.replaceChildren(fragment);
  const isEmpty = state.collection.length === 0;
  el.vaultEmpty.hidden = !isEmpty;
  el.vaultGrid.hidden = isEmpty;
  el.clearVault.hidden = isEmpty;

  if (newId) {
    window.setTimeout(() => {
      const newNode = el.vaultGrid.querySelector(`[data-id="${newId}"]`);
      if (newNode) {
        newNode.classList.remove("is-new");
      }
    }, 850);
  }

  updateStats();
}

function collectProduct(product) {
  const isNew = !state.collection.includes(product.id);
  state.collection = [product.id, ...state.collection.filter((id) => id !== product.id)];
  return isNew;
}

/* ---------- drawing ---------- */

function pickProduct() {
  const rare = Math.random() < RARE_CHANCE;
  const source = rare ? RARE_PRODUCTS : PRODUCTS;
  const filtered = source.filter((product) => !state.current || product.id !== state.current.id);
  const pool = filtered.length > 0 ? filtered : source;
  return pool[Math.floor(Math.random() * pool.length)];
}

function setDrawingUi(isDrawing) {
  state.isDrawing = isDrawing;
  el.drawButton.disabled = isDrawing;
  el.lever.disabled = isDrawing;
  el.againButton.disabled = isDrawing;
  el.machine.classList.toggle("is-pulling", isDrawing);
  el.drawButton.classList.toggle("is-pulling", isDrawing);
  el.drawButton.setAttribute("aria-busy", String(isDrawing));
  el.drawLabel.textContent = isDrawing ? "正在补货…" : "再拉一下 · 补货";
}

function drawProduct() {
  if (state.isDrawing) {
    return;
  }

  ensureAudio();
  playLeverSound();
  setDrawingUi(true);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const delay = reducedMotion ? 260 : 690;

  window.setTimeout(() => {
    try {
      const today = dayKey();
      if (state.day !== today) {
        state.day = today;
        state.todayCount = 0;
      }

      const product = pickProduct();
      state.todayCount += 1;
      const isNew = collectProduct(product);

      renderProduct(product, { mode: "draw", print: true });
      renderVault(isNew ? product.id : null);
      persistState();
      burstConfetti(Boolean(product.rare));
      playRevealSound(Boolean(product.rare));

      if (product.rare) {
        showToast(`隐藏款出现：${product.name}。店长睁开了一只眼。`, 3500);
      } else if (isNew && state.collection.length === 1) {
        showToast("第一件好物已入库，仓库有了一点生活痕迹。");
      }
    } finally {
      setDrawingUi(false);
    }
  }, delay);
}

/* ---------- actions ---------- */

function buildReceiptText() {
  const product = state.current;
  if (!product) {
    return "";
  }

  const total = ALL_PRODUCTS.length;
  return [
    "【黑洞便利店 · 宇宙第 404 号分店】",
    `${product.emoji} ${product.name} / ${product.en}`,
    `“${product.desc}”`,
    "",
    `功效：${product.effect}`,
    `副作用：${product.side}`,
    `适用人群：${product.crowd}`,
    `售价：${product.price} ${product.unit || "宇宙币"}`,
    `今日已拆：${state.todayCount} 件 · 仓库：${state.collection.length}/${total}`,
    "",
    "只收好奇心，不设找零。",
    "—— 店长正在收银台睡觉，自助结账，谢谢。",
  ].join("\n");
}

function fallbackCopy(text) {
  const helper = document.createElement("textarea");
  helper.value = text;
  helper.setAttribute("readonly", "");
  helper.style.position = "fixed";
  helper.style.top = "0";
  helper.style.left = "-9999px";
  helper.style.opacity = "0";
  document.body.appendChild(helper);
  helper.select();
  helper.setSelectionRange(0, helper.value.length);

  let copied = false;
  try {
    copied = document.execCommand("copy");
  } catch (error) {
    copied = false;
  }
  helper.remove();
  return copied;
}

function openCopyDialog(text) {
  if (!el.copyDialog || typeof el.copyDialog.showModal !== "function") {
    window.prompt("复制这张小票：", text);
    return;
  }

  window.clearTimeout(toastTimer);
  el.toast.classList.remove("is-visible");
  el.copyDialogText.value = text;
  if (copyDialogHintMarkup) {
    el.copyDialogHint.innerHTML = copyDialogHintMarkup;
  }
  document.body.classList.add("has-dialog");

  if (!el.copyDialog.open) {
    el.copyDialog.showModal();
  }

  window.requestAnimationFrame(() => {
    el.copyDialogText.focus();
    el.copyDialogText.setSelectionRange(0, el.copyDialogText.value.length);
    el.copyDialogText.scrollTop = 0;
    window.requestAnimationFrame(() => {
      el.copyDialogText.scrollTop = 0;
    });
  });
}

function closeCopyDialog() {
  if (el.copyDialog?.open) {
    el.copyDialog.close();
  }
}

async function copyReceipt() {
  const text = buildReceiptText();

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      showToast("小票已复制，记得贴在冰箱上。");
      return;
    }
  } catch (error) {
    /* Fall through to the legacy copy path. */
  }

  if (fallbackCopy(text)) {
    showToast("小票已复制，记得贴在冰箱上。");
  } else {
    openCopyDialog(text);
  }
}

async function retryCopyFromDialog() {
  const text = buildReceiptText();
  let copied = false;

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      copied = true;
    }
  } catch (error) {
    copied = false;
  }

  if (!copied && el.copyDialogText) {
    el.copyDialogText.focus();
    el.copyDialogText.select();
    try {
      copied = document.execCommand("copy");
    } catch (error) {
      copied = false;
    }
  }

  if (copied) {
    if (el.copyDialog?.open) {
      el.copyDialog.close();
    }
    showToast("小票已复制，记得贴在冰箱上。");
    return;
  }

  el.copyDialogHint.textContent = "还是没拿到复制权限。文字已经选中，直接按 Ctrl / ⌘ + C 吧。";
  el.copyDialogText.focus();
  el.copyDialogText.select();
  el.copyDialogText.scrollTop = 0;
}

function clearVault() {
  if (state.collection.length === 0) {
    return;
  }

  const confirmed = window.confirm("清空仓库？抽到的好物会消失，但猫店长不会。");
  if (!confirmed) {
    return;
  }

  state.collection = [];
  state.current = dailyProduct();
  state.isRare = Boolean(state.current.rare);
  state.mode = "daily";
  renderProduct(state.current, { mode: "daily" });
  renderVault();
  persistState();
  showToast("仓库清空了，但黑洞记得你来过。");
}

function showToast(message, duration = 2500) {
  window.clearTimeout(toastTimer);
  el.toast.textContent = message;
  el.toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => {
    el.toast.classList.remove("is-visible");
  }, duration);
}

function burstConfetti(isRare) {
  const rect = el.machineTray.getBoundingClientRect();
  const colors = isRare
    ? ["#ffe45c", "#fffaf0", "#ff4b2b", "#2946f5"]
    : ["#2946f5", "#ff4b2b", "#ffe45c", "#b9e7cd", "#f4bdde"];

  for (let index = 0; index < 22; index += 1) {
    const piece = document.createElement("span");
    const angle = -Math.PI / 2 + (Math.random() - 0.5) * Math.PI * 1.45;
    const distance = 70 + Math.random() * (isRare ? 195 : 145);
    piece.className = "confetti-piece";
    piece.style.left = `${rect.left + rect.width / 2 + (Math.random() - 0.5) * 34}px`;
    piece.style.top = `${rect.top + rect.height / 2}px`;
    piece.style.background = colors[index % colors.length];
    piece.style.width = `${5 + Math.random() * 6}px`;
    piece.style.height = `${8 + Math.random() * 10}px`;
    piece.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    piece.style.setProperty("--y", `${Math.sin(angle) * distance + Math.random() * 70}px`);
    piece.style.setProperty("--r", `${(Math.random() - 0.5) * 900}deg`);
    piece.style.animationDelay = `${Math.random() * 0.06}s`;
    if (Math.random() > 0.7) {
      piece.style.borderRadius = "50%";
    }
    el.confettiLayer.appendChild(piece);
    piece.addEventListener("animationend", () => piece.remove(), { once: true });
  }
}

function spawnHearts() {
  const rect = el.shopCat.getBoundingClientRect();
  const symbols = ["♥", "♡", "✦", "♡"];

  for (let index = 0; index < 4; index += 1) {
    const heart = document.createElement("span");
    heart.className = "heart-piece";
    heart.textContent = symbols[index];
    heart.style.left = `${rect.left + rect.width * 0.62 + (Math.random() - 0.5) * 24}px`;
    heart.style.top = `${rect.top + rect.height * 0.3}px`;
    heart.style.color = index === 2 ? "#2946f5" : "#ff4b2b";
    heart.style.setProperty("--x", `${(Math.random() - 0.5) * 58}px`);
    heart.style.animationDelay = `${index * 0.04}s`;
    el.heartLayer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove(), { once: true });
  }
}

function showCatBubble(message) {
  let bubble = el.shopCat.querySelector(".cat-bubble");
  if (!bubble) {
    bubble = document.createElement("span");
    bubble.className = "cat-bubble";
    el.shopCat.appendChild(bubble);
  }

  bubble.textContent = message;
  bubble.classList.remove("is-visible");
  void bubble.offsetWidth;
  bubble.classList.add("is-visible");
  window.clearTimeout(catBubbleTimer);
  catBubbleTimer = window.setTimeout(() => {
    bubble.classList.remove("is-visible");
  }, 3200);
}

function petCat() {
  state.catPets += 1;
  persistState();
  ensureAudio();
  playCatPurr();
  spawnHearts();

  el.shopCat.classList.remove("is-petted");
  void el.shopCat.offsetWidth;
  el.shopCat.classList.add("is-petted");
  window.setTimeout(() => el.shopCat.classList.remove("is-petted"), 620);

  const messages = [
    "呼噜呼噜…… 店长翻了个身。",
    "店长用尾巴拍了拍你的手。",
    "店长睁开一只眼：抽一件再走，别空手。",
    "店长批准你今天摸鱼 10 分钟。",
    "店长说：世界很吵，但你不用一直回应。",
    "店长打了个小呼噜，像在说：会好的。",
  ];

  const message = messages[(state.catPets - 1) % messages.length];
  showCatBubble(message);
}

function showCollectedProduct(product) {
  if (!product) {
    return;
  }

  renderProduct(product, { mode: "restore", print: true, fromVault: true });
  persistState();

  if (window.matchMedia("(max-width: 930px)").matches) {
    el.receiptWrap.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

function toggleSound() {
  state.soundOn = !state.soundOn;
  el.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
  el.soundLabel.textContent = state.soundOn ? "音效 开" : "音效 关";
  persistState();

  if (state.soundOn) {
    playToggleSound(true);
    showToast("音效打开了，摇杆会发出一点小声音。");
  } else {
    showToast("音效关闭，猫店长继续睡。");
  }
}

/* ---------- init ---------- */

function bindEvents() {
  el.drawButton.addEventListener("click", drawProduct);
  el.lever.addEventListener("click", drawProduct);
  el.againButton.addEventListener("click", drawProduct);
  el.copyButton.addEventListener("click", copyReceipt);
  el.retryCopy.addEventListener("click", retryCopyFromDialog);
  el.closeCopyDialog.addEventListener("click", closeCopyDialog);
  el.dismissCopy.addEventListener("click", closeCopyDialog);
  el.copyDialog.addEventListener("close", () => {
    document.body.classList.remove("has-dialog");
    el.copyButton.focus({ preventScroll: true });
  });
  el.copyDialog.addEventListener("click", (event) => {
    if (event.target === el.copyDialog) {
      closeCopyDialog();
    }
  });
  el.soundToggle.addEventListener("click", toggleSound);
  el.shopCat.addEventListener("click", petCat);
  el.clearVault.addEventListener("click", clearVault);

  el.vaultGrid.addEventListener("click", (event) => {
    const item = event.target.closest(".vault-item");
    if (!item) {
      return;
    }
    const product = PRODUCT_MAP.get(item.dataset.id);
    if (product) {
      showCollectedProduct(product);
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.code !== "Space" || event.repeat || event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    if (event.target.closest("button, a, input, textarea, select, [contenteditable='true']")) {
      return;
    }
    event.preventDefault();
    drawProduct();
  });
}

function init() {
  cacheElements();
  copyDialogHintMarkup = el.copyDialogHint.innerHTML;
  loadState();
  bindEvents();

  el.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
  el.soundLabel.textContent = state.soundOn ? "音效 开" : "音效 关";
  el.collectionTotal.textContent = String(ALL_PRODUCTS.length);

  renderProduct(state.current, { mode: state.mode });
  renderVault();
  updateStats();

  if (state.collection.length === 0) {
    el.drawLabel.textContent = "拉一下 · 补货";
  } else {
    el.drawLabel.textContent = "再拉一下 · 补货";
  }

  window.setTimeout(() => {
    document.body.classList.add("is-ready");
  }, 60);
}

init();

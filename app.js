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
  {
    id: "anti-gravity-noodles",
    emoji: "🍜",
    name: "反重力泡面",
    en: "ANTI-GRAVITY NOODLES",
    tag: "居家玄学",
    desc: "吃一口，整个人轻到可以飘去下班。汤底是自由的，面是弹的。",
    effect: "让身体短暂忽略地心引力，也忽略 KPI。",
    side: "可能飘到天花板上下不来，外卖得往上送。",
    crowd: "体重焦虑者、下班冲刺选手、想原地起飞的人。",
    review: "“飘起来那一刻，我看到了工位的全貌，也看到了自由。”",
    price: "12.0",
    color: "#ffd3a1",
    stars: 4.8,
  },
  {
    id: "mood-umbrella",
    emoji: "☂️",
    name: "情绪折叠伞",
    en: "MOOD UMBRELLA",
    tag: "情绪补给",
    desc: "把突然的委屈折成小雨，撑开就是晴天。伞骨是用“没关系”做的。",
    effect: "在小崩溃落下前，撑起一小块干燥的地方。",
    side: "伞面只挡情绪，不挡雨；雨天请另备一把。",
    crowd: "通勤路上想哭的人、被消息击中的下午、需要一点遮蔽的人。",
    review: "“撑开以后没下雨，但我确实没那么想哭了。”",
    price: "7.7",
    color: "#c9d2ff",
    stars: 4.9,
  },
  {
    id: "delete-monday",
    emoji: "⌫",
    name: "周一删除键",
    en: "DELETE MONDAY",
    tag: "周一特供",
    desc: "只删周一，不删工资。按下去，日历会空出一格，像生活偷偷眨了个眼。",
    effect: "把周一从这周的记忆里轻轻抠掉。",
    side: "周二会变成新的周一，并带着一点起床气。",
    crowd: "周一恐惧症、周末延长派、开工困难户。",
    review: "“删了，但老板的闹钟好像没删。”",
    price: "6.6",
    color: "#ffe45c",
    stars: 4.7,
  },
  {
    id: "shutdown-key",
    emoji: "⏻",
    name: "打工人关机键",
    en: "SHUTDOWN KEY",
    tag: "职场续命",
    desc: "让大脑蓝屏三分钟，自动重启。重启后缓存清空，会议纪要还在。",
    effect: "强行结束 37 个后台运行的焦虑进程。",
    side: "可能把“好的收到”也一起关掉，需要手动补回。",
    crowd: "多线程打工人、消息爆炸选手、工位过热患者。",
    review: "“重启之后还是我，但风扇声小了一点。”",
    price: "8.8",
    color: "#b9e7cd",
    stars: 4.8,
  },
  {
    id: "social-patch",
    emoji: "🩹",
    name: "社交回血贴",
    en: "SOCIAL PATCH",
    tag: "社交糊弄",
    desc: "贴上一小时，能多聊五句。撕下来后，你还是那个想回家的人。",
    effect: "在饭局和电梯间缓慢回复社交电量。",
    side: "可能对最亲的人失效，因为在他们面前你本来就藏不住。",
    crowd: "内向星人、聚会边缘人、电梯寒暄过敏者。",
    review: "“多聊了五句，回家充了一整晚，但不算亏。”",
    price: "5.5",
    color: "#ffc5b2",
    stars: 4.6,
  },
  {
    id: "client-translator",
    emoji: "🗜️",
    name: "甲方翻译器",
    en: "CLIENT TRANSLATOR",
    tag: "乙方专用",
    desc: "把“随便”翻译成“按第一版来”，把“再大气一点”翻译成“字再大一点”。",
    effect: "让你在开口前听懂 80% 的潜台词。",
    side: "剩下 20% 会在改到第 18 版时突然出现。",
    crowd: "乙方设计师、方案型选手、深夜改稿人。",
    review: "“终于知道‘不要那种感觉’是哪种感觉了，虽然还是要改。”",
    price: "19.9",
    color: "#ffd3a1",
    stars: 4.7,
  },
  {
    id: "slack-mimosa",
    emoji: "🌿",
    name: "摸鱼隐身草",
    en: "SLACK MIMOSA",
    tag: "摸鱼装备",
    desc: "工位上一放，路过的人自动看不见你。它也会假装自己是一盆普通绿植。",
    effect: "在领导经过的 30 秒里，让你和屏幕融为一体。",
    side: "可能让同事也看不见你，包括午饭叫你的那个人。",
    crowd: "摸鱼特工、开放式工位难民、需要静音的人。",
    review: "“它确实有用，连外卖小哥都找了我半天。”",
    price: "9.9",
    color: "#b9e7cd",
    stars: 4.8,
  },
  {
    id: "reverse-pomodoro",
    emoji: "🍅",
    name: "反向番茄钟",
    en: "REVERSE POMODORO",
    tag: "时间管理",
    desc: "每工作 5 分钟，奖励自己 25 分钟。时间管理大师看了会沉默。",
    effect: "把“再坚持一下”变成“已经可以休息了”。",
    side: "工作进度将以肉眼可见的速度原地踏步。",
    crowd: "拖延症晚期、自由职业者、需要一点甜头的人。",
    review: "“用了三天，工作没做完，但心情很好。”",
    price: "3.3",
    color: "#ffc5b2",
    stars: 4.4,
  },
  {
    id: "eight-am-regret",
    emoji: "💊",
    name: "早八后悔药",
    en: "8AM REGRET",
    tag: "时间管理",
    desc: "昨晚熬夜专用，今早自动装死。药效包括多睡十分钟和一句“我马上到”。",
    effect: "把早八的痛感调成静音。",
    side: "迟到记录不会消失，只会被药效暂时盖住。",
    crowd: "早八幸存者、报复性熬夜党、踩点艺术家。",
    review: "“吃了，迟到了，但心态平和，甚至想再睡五分钟。”",
    price: "2.2",
    color: "#c9d2ff",
    stars: 4.3,
  },
  {
    id: "clock-out-horn",
    emoji: "📯",
    name: "下班冲锋号",
    en: "CLOCK-OUT HORN",
    tag: "职场续命",
    desc: "17:59 响起，全公司一起收拾包。号声落下，电梯口自动排队。",
    effect: "把“再弄一下”变成“明天再说”。",
    side: "可能被老板听见，并临时召开一个“简单碰头会”。",
    crowd: "准点下班派、电梯竞速选手、工位起义者。",
    review: "“响了，我站起来了，老板也站起来了，他去倒水，我跑了。”",
    price: "16.6",
    color: "#ffe45c",
    stars: 4.9,
  },
  {
    id: "weekly-report",
    emoji: "🖨️",
    name: "周报自动生成器",
    en: "WEEKLY REPORT-O-MATIC",
    tag: "职场续命",
    desc: "把“忙”写成 800 字有逻辑的忙，自动加上“持续跟进”“闭环”“赋能”。",
    effect: "五分钟交出一份看起来很重要的周报。",
    side: "可能被追问细节，并因此多开一个会。",
    crowd: "周报困难户、月末失忆者、需要体面交差的人。",
    review: "“老板说我写得越来越有高度了，其实我什么都没多干。”",
    price: "12.5",
    color: "#d9d1ff",
    stars: 4.8,
  },
  {
    id: "meeting-pod",
    emoji: "🚀",
    name: "会议逃生舱",
    en: "MEETING POD",
    tag: "职场续命",
    desc: "一键弹射，附赠“网络不好”音效。舱内提供热水、耳机和一整段不被打扰的时间。",
    effect: "从任何一场超长会议中优雅脱离。",
    side: "可能错过散会时发的那份奶茶，以及一个关键决定。",
    crowd: "会议潜水员、无效讨论受害者、需要喘息的人。",
    review: "“弹射成功，回来发现会已经开完了，完美。”",
    price: "26.0",
    color: "#bde3f2",
    stars: 4.9,
  },
  {
    id: "mood-bin",
    emoji: "🗑️",
    name: "情绪垃圾桶",
    en: "MOOD BIN",
    tag: "精神状态",
    desc: "把内耗倒进去，自动分类可回收。盖子一合，世界清净三分钟。",
    effect: "把反复回放的尴尬和烦躁压缩成一小团。",
    side: "倒太满会溢出来，需要定期清空并分类。",
    crowd: "高敏人群、睡前复盘师、内耗型选手。",
    review: "“倒完轻了，第二天又满了，但说明它确实在工作。”",
    price: "7.0",
    color: "#b9e7cd",
    stars: 4.7,
  },
  {
    id: "seat-summoner",
    emoji: "🪑",
    name: "地铁座位召唤器",
    en: "SEAT SUMMONER",
    tag: "通勤必备",
    desc: "下一站，总有一个座位为你空出来。召唤范围三节车厢，成功率看缘分。",
    effect: "让站着的人流自动为你分出一条路。",
    side: "可能召唤到爱心专座，引来全车人的目光。",
    crowd: "跨城打工人、高跟鞋通勤者、站到腿麻的人。",
    review: "“今天真的坐到了，虽然只有一站，但很感动。”",
    price: "6.8",
    color: "#c9d2ff",
    stars: 4.6,
  },
  {
    id: "night-mask",
    emoji: "🎭",
    name: "熬夜遮瑕膏",
    en: "NIGHT MASK",
    tag: "深夜限定",
    desc: "遮住黑眼圈，也遮住“我又熬夜了”。卸妆时，真相和黑眼圈一起回来。",
    effect: "让第二天的你看起来像睡满了八小时。",
    side: "只遮脸，不遮疲惫；咖啡仍需另购。",
    crowd: "熬夜冠军、早八演员、视频会议素颜党。",
    review: "“同事问我最近是不是早睡了，我笑而不语。”",
    price: "18.0",
    color: "#f4bdde",
    stars: 4.5,
  },
  {
    id: "wishing-pool",
    emoji: "⛲",
    name: "打工人许愿池",
    en: "WISHING POOL",
    tag: "职场续命",
    desc: "投一枚硬币，愿望是“今天准点下班”。池底已经堆满了同一个愿望。",
    effect: "给每个工作日一个可以被听见的小心愿。",
    side: "只负责许愿，不负责实现；偶尔会灵，但别声张。",
    crowd: "加班常客、准点下班幻想家、需要一点盼头的人。",
    review: "“许了七天，灵了一天，那天我激动得忘了打卡。”",
    price: "1.0",
    color: "#bde3f2",
    stars: 4.6,
  },
  {
    id: "caffeine-iv",
    emoji: "💉",
    name: "咖啡因续命针",
    en: "CAFFEINE IV",
    tag: "职场续命",
    desc: "5 秒回血，2 小时后自动心慌。医生的建议是睡觉，你的选择是再撑一下。",
    effect: "把困意暂时按进地毯下面。",
    side: "可能手抖、心跳加速，并在凌晨三点思考人生。",
    crowd: "咖啡续命人、赶方案选手、把冰美式当水喝的人。",
    review: "“续上了，但续的是明天的疲惫。”",
    price: "13.9",
    color: "#ffd3a1",
    stars: 4.4,
  },
  {
    id: "eat-freely",
    emoji: "🍕",
    name: "饮食自由券",
    en: "EAT FREELY",
    tag: "居家玄学",
    desc: "今天吃什么都不计算热量，但明天早上它会温柔地提醒你。",
    effect: "让一顿饭只负责快乐，不负责数字。",
    side: "明天体重秤的表情可能不太好看。",
    crowd: "减脂期崩溃者、夜宵爱好者、需要一顿好饭的人。",
    review: "“吃得很快乐，第二天也很快乐，只是裤子有点紧。”",
    price: "0.5",
    color: "#ffc5b2",
    stars: 4.8,
  },
  {
    id: "chore-begone",
    emoji: "🧹",
    name: "家务消失术",
    en: "CHORE BEGONE",
    tag: "居家玄学",
    desc: "脏衣服自动隐身，直到你打开衣柜。地板会短暂地看起来像刚拖过。",
    effect: "把家务从视野里挪走，给周末腾一点空。",
    side: "衣服不会真的消失，只会在你需要出门时集体出现。",
    crowd: "周末躺平党、租房青年、和灰尘和平共处的人。",
    review: "“衣柜打开那一刻，我的周末结束了。”",
    price: "8.0",
    color: "#ffe45c",
    stars: 4.5,
  },
  {
    id: "boss-lip-reader",
    emoji: "👄",
    name: "老板口型翻译器",
    en: "BOSS LIP READER",
    tag: "职场续命",
    desc: "隔着玻璃也能读出“这个再改改”。附带 3 秒预警，让你提前打开文档。",
    effect: "在老板开口前进入工作状态。",
    side: "也可能误读成“可以下班了”，后果自负。",
    crowd: "工位敏感肌、摸鱼观察员、远程会议选手。",
    review: "“读对了，真的要改，但我已经来不及难过了。”",
    price: "14.0",
    color: "#d9d1ff",
    stars: 4.7,
  },
  {
    id: "slack-noise",
    emoji: "🎧",
    name: "摸鱼白噪音",
    en: "SLACK NOISE",
    tag: "摸鱼装备",
    desc: "键盘声、打印机声和“收到”组成海浪。戴上后，工位短暂变成海边。",
    effect: "把办公室噪音调成一片适合发呆的海。",
    side: "可能连同事叫你吃饭也没听见。",
    crowd: "开放式工位难民、需要专注的人、下午三点犯困者。",
    review: "“听见海了，也听见老板喊我名字了。”",
    price: "7.2",
    color: "#bde3f2",
    stars: 4.8,
  },
  {
    id: "vacation-pill",
    emoji: "🏖️",
    name: "年假幻觉剂",
    en: "VACATION PILL",
    tag: "职场续命",
    desc: "服用后，工位短暂出现海风。药效两小时，足够你计划一次真正的出走。",
    effect: "在工位和海边之间开一扇临时的窗。",
    side: "回到现实时会有一点落差，请配合深呼吸服用。",
    crowd: "年假余额不足者、想逃班的人、需要海的人。",
    review: "“闻到了海风，也闻到了打印机，但心情好了一点。”",
    price: "17.7",
    color: "#b9e7cd",
    stars: 4.7,
  },
  {
    id: "vanish-spray",
    emoji: "💨",
    name: "人间蒸发喷雾",
    en: "VANISH SPRAY",
    tag: "社交糊弄",
    desc: "仅限社交电量耗尽时使用，十分钟后自动回来。回来时，世界还在，但你没那么怕了。",
    effect: "在人群里短暂隐身，给社交电量一个缓冲。",
    side: "可能连你想见的人也找不到你。",
    crowd: "社恐星人、聚会逃兵、需要独处的人。",
    review: "“消失了十分钟，回来时大家没发现，太好了。”",
    price: "11.0",
    color: "#f4bdde",
    stars: 4.6,
  },
  {
    id: "praise-notes",
    emoji: "🗒️",
    name: "夸夸便签",
    en: "PRAISE NOTES",
    tag: "情绪补给",
    desc: "每天一张，贴在电脑边，写着“你做得很好”。便签不会评价你的 KPI，只负责夸你。",
    effect: "在自我怀疑时提供一张小小的证据。",
    side: "用久了会开始相信，可能有点危险。",
    crowd: "缺能量的人、被否定过的人、需要一点光的人。",
    review: "“今天它写着‘你已经很努力了’，我贴在了工牌上。”",
    price: "3.0",
    color: "#ffe45c",
    stars: 5.0,
  },
  {
    id: "chill-raincoat",
    emoji: "🧥",
    name: "情绪稳定雨衣",
    en: "CHILL RAINCOAT",
    tag: "情绪补给",
    desc: "挡住生活的酸雨，也会挡住一点阳光。但至少，里面的你可以慢慢走。",
    effect: "让突如其来的坏消息顺着衣角滑下去。",
    side: "穿太久会忘记怎么淋雨，也忘记怎么晒太阳。",
    crowd: "成年人、情绪照护者、需要一层保护的人。",
    review: "“雨没停，但我没湿，已经够了。”",
    price: "22.0",
    color: "#b9e7cd",
    stars: 4.8,
  },
  {
    id: "scope-clay",
    emoji: "🫠",
    name: "甲方需求橡皮泥",
    en: "SCOPE CLAY",
    tag: "乙方专用",
    desc: "怎么捏都能成型，除了你的耐心。每改一版，它都会说“这次感觉对了”。",
    effect: "把不断变化的需求揉成一个能交差的东西。",
    side: "会粘在手上，甩也甩不掉，像某些项目。",
    crowd: "乙方、项目经理、被需求追着跑的人。",
    review: "“捏到最后，甲方说还是第一版好，我笑了。”",
    price: "33.0",
    color: "#ffd3a1",
    stars: 4.5,
  },
  {
    id: "sleep-warden",
    emoji: "🌙",
    name: "早睡监督员",
    en: "SLEEP WARDEN",
    tag: "睡眠专区",
    desc: "23:00 准时没收手机，但会还你一个好觉。它不听解释，只认作息。",
    effect: "在深夜把你从短视频的传送带上拽下来。",
    side: "可能连你真的想看的消息也一起锁了。",
    crowd: "熬夜惯犯、睡眠负债人、明早一定早睡者。",
    review: "“被没收手机的那晚，我睡了八小时，梦都没做。”",
    price: "9.0",
    color: "#c9d2ff",
    stars: 4.9,
  },
  {
    id: "worker-time-capsule",
    emoji: "⏳",
    name: "打工人时间胶囊",
    en: "TIME CAPSULE",
    tag: "职场续命",
    desc: "把今天的痛苦寄给明年，让他也感受一下。当然，也会寄去一点撑过来的自己。",
    effect: "让当下的难熬变成未来的一个笑话。",
    side: "明年打开时，可能已经换了工作，也可能还在。",
    crowd: "正在熬的人、想留点证据的人、需要相信会过去的人。",
    review: "“去年埋的，今年挖出来了，我还活着，甚至升职了。”",
    price: "12.0",
    color: "#d9d1ff",
    stars: 4.9,
  },
  {
    id: "anti-roll-band",
    emoji: "🥋",
    name: "反卷头巾",
    en: "ANTI-ROLL BAND",
    tag: "精神状态",
    desc: "戴上后，别人卷你也不慌。头巾上绣着四个字：关我什么事。",
    effect: "在全员加速的环境里，维持自己的速度。",
    side: "可能错过一些机会，但也会错过一些内耗。",
    crowd: "反卷先锋、准时下班派、被比较到麻木的人。",
    review: "“别人卷生卷死，我午睡醒来，世界还在转。”",
    price: "6.0",
    color: "#ffc5b2",
    stars: 4.8,
  },
  {
    id: "monday-alert",
    emoji: "🌧️",
    name: "周一下雨警报",
    en: "MONDAY ALERT",
    tag: "周一特供",
    desc: "提前 48 小时提醒你：周一要来了。警报声是雨声，适合在周日晚上抱着枕头听。",
    effect: "让周日焦虑提前被看见，并有一点准备时间。",
    side: "也可能让整个周末都笼罩在“周一要来”的阴影里。",
    crowd: "周日恐惧症、周末珍惜者、需要心理准备的人。",
    review: "“提前两天开始焦虑，焦虑得很充分，周一反而没那么糟。”",
    price: "4.4",
    color: "#bde3f2",
    stars: 4.3,
  },
  {
    id: "eight-am-blinds",
    emoji: "😴",
    name: "早八隐形眼罩",
    en: "8AM BLINDS",
    tag: "时间管理",
    desc: "睁不开眼也能看起来在认真听。眼罩外侧印着“收到”，内侧是柔软的黑。",
    effect: "在早八课堂或晨会上保留最后一点睡意。",
    side: "可能真的睡着，并错过点名。",
    crowd: "早八人、通勤补觉党、会议闭目养神者。",
    review: "“老师以为我在思考，其实我在做梦。”",
    price: "5.0",
    color: "#c9d2ff",
    stars: 4.4,
  },
  {
    id: "delivery-charm",
    emoji: "🥟",
    name: "外卖准时符",
    en: "DELIVERY CHARM",
    tag: "居家玄学",
    desc: "下单即到，前提是你不盯着进度条。越盯越慢，越佛越快，玄学莫测。",
    effect: "让等待外卖的时间在感官上缩短一半。",
    side: "可能准时到的是别人的外卖，你的还在路上。",
    crowd: "深夜点单选手、饥饿难耐者、相信玄学的人。",
    review: "“贴上后五分钟就到了，虽然送错了楼层，但至少到了。”",
    price: "2.0",
    color: "#ffe45c",
    stars: 4.6,
  },
  {
    id: "order-mask",
    emoji: "🎭",
    name: "社恐点单面具",
    en: "ORDER MASK",
    tag: "社交糊弄",
    desc: "去前台点单不再需要心理建设。面具上写着“中杯，少冰，谢谢”，一目了然。",
    effect: "把开口这件事变成一次简单的展示。",
    side: "遇到熟人时，面具会让你看起来像在 cosplay。",
    crowd: "社恐点单者、咖啡店犹豫选手、不想说话的人。",
    review: "“顺利点完了，店员还夸我面具好看，值。”",
    price: "9.9",
    color: "#f4bdde",
    stars: 4.7,
  },
  {
    id: "mood-cable",
    emoji: "🔋",
    name: "情绪充电线",
    en: "MOOD CABLE",
    tag: "情绪补给",
    desc: "一头连着朋友，一头连着你，慢慢充。充电时会发热，像有人认真听你说话。",
    effect: "把一段好的对话变成可持续的能量。",
    side: "线太长会打结，关系也是；请偶尔整理。",
    crowd: "需要被听见的人、朋友充电宝、深夜聊天选手。",
    review: "“聊了半小时，电量从 3% 到 40%，够撑到明天。”",
    price: "15.0",
    color: "#b9e7cd",
    stars: 5.0,
  },
  {
    id: "slack-credit",
    emoji: "💳",
    name: "摸鱼额度卡",
    en: "SLACK CREDIT",
    tag: "摸鱼装备",
    desc: "每天 30 分钟合法发呆，超时自动续费。额度可累积，但不会过期。",
    effect: "把摸鱼从偷偷摸摸变成一张有额度的卡。",
    side: "额度用完后会自动产生“我该努力了”的幻觉。",
    crowd: "工位摸鱼党、灵感工作者、需要留白的人。",
    review: "“额度刷完了，但我发现发呆其实也在工作。”",
    price: "10.0",
    color: "#ffe45c",
    stars: 4.8,
  },
  {
    id: "reverse-alarm",
    emoji: "🛏️",
    name: "反向闹钟",
    en: "REVERSE ALARM",
    tag: "睡眠专区",
    desc: "不叫你起床，只提醒你早点睡。到点会轻轻说：明天再刷也来得及。",
    effect: "在下班后给你一个温柔的收尾。",
    side: "可能被无视，并继续响到凌晨。",
    crowd: "报复性熬夜党、睡前刷手机者、需要被温柔提醒的人。",
    review: "“响了，我关了，又刷了一小时，但至少听见了。”",
    price: "4.5",
    color: "#c9d2ff",
    stars: 4.6,
  },
  {
    id: "fake-raise",
    emoji: "📈",
    name: "空气加薪通知",
    en: "FAKE RAISE",
    tag: "职场续命",
    desc: "打印出来贴墙上，摸鱼时看一眼。金额自填，签名处写着“你值得”。",
    effect: "在没有涨薪的日子里，提供一点体面的幻觉。",
    side: "HR 看见会问你在干什么，请提前想好解释。",
    crowd: "薪资沉默者、需要鼓励的打工人、工位装饰爱好者。",
    review: "“贴了之后心情好了，直到看到工资条。”",
    price: "0.8",
    color: "#ffd3a1",
    stars: 4.5,
  },
  {
    id: "weekend-extender",
    emoji: "🕰️",
    name: "周末延长器",
    en: "WEEKEND EXTENDER",
    tag: "时间管理",
    desc: "把周六下午调成 0.5 倍速，让一杯咖啡喝很久，让阳光在桌上多停一会儿。",
    effect: "让周末的体感长度增加 40%。",
    side: "周一早上的时间会报复性加速。",
    crowd: "周末珍惜者、时间焦虑者、需要慢下来的人。",
    review: "“周六下午像过了两天，晚上也不舍得睡。”",
    price: "14.9",
    color: "#b9e7cd",
    stars: 4.9,
  },
  {
    id: "overthink-calc",
    emoji: "🧮",
    name: "内耗计算器",
    en: "OVERTHINK CALC",
    tag: "精神状态",
    desc: "输入你今天想了几遍，算到最后显示：“想这么多也没用”。附赠一次深呼吸。",
    effect: "把抽象的焦虑变成一个具体且荒谬的数字。",
    side: "算得太清楚，可能开始为思考本身内耗。",
    crowd: "高敏人群、复盘成瘾者、睡前脑内小剧场。",
    review: "“算了 47 遍，结论是我不该算。”",
    price: "2.5",
    color: "#d9d1ff",
    stars: 4.8,
  },
  {
    id: "sleep-limiter",
    emoji: "💤",
    name: "睡眠防沉迷系统",
    en: "SLEEP LIMITER",
    tag: "睡眠专区",
    desc: "刷到第 88 个视频自动锁屏。你可以挣扎，但屏幕已经不给你机会了。",
    effect: "在深夜替你按下那个按不下去的暂停键。",
    side: "可能在你正看到关键剧情时锁屏，并让你惦记一整晚。",
    crowd: "短视频成瘾者、报复性熬夜党、需要外力的人。",
    review: "“锁了，我躺了十分钟就睡着了，剧情第二天没那么重要。”",
    price: "8.8",
    color: "#bde3f2",
    stars: 4.7,
  },
  {
    id: "monday-drip",
    emoji: "☕",
    name: "周一咖啡因吊瓶",
    en: "MONDAY DRIP",
    tag: "周一特供",
    desc: "一滴唤醒灵魂，两滴开始写周报。三滴会让你觉得这个班还能再上一天。",
    effect: "在周一早上以最快速度恢复基本人类功能。",
    side: "可能晚上睡不着，并开始思考工作的意义。",
    crowd: "周一断电人、早会发言者、周末作息紊乱者。",
    review: "“挂了两滴，能说话了，但不想说。”",
    price: "6.9",
    color: "#ffd3a1",
    stars: 4.8,
  },
  {
    id: "revision-coin",
    emoji: "🪙",
    name: "甲方改稿复活币",
    en: "REVISION COIN",
    tag: "乙方专用",
    desc: "每改一版，自动掉一枚，捡起来继续。集齐 18 枚，可以兑换一次“这版真的定了”的错觉。",
    effect: "在无止境的修改中，给耐心续一格。",
    side: "复活后仍需改稿，且可能掉落新的需求。",
    crowd: "乙方设计、文案、项目经理、第 18 版选手。",
    review: "“第 18 版交上去了，甲方说再回到第一版，我的币白攒了。”",
    price: "3.8",
    color: "#ffe45c",
    stars: 4.7,
  },
  {
    id: "power-nap",
    emoji: "🛌",
    name: "打盹十五分钟",
    en: "POWER NAP",
    tag: "睡眠专区",
    desc: "午休一下，下午像换了个人。前提是你能在十五分钟内真正睡着，并准时醒。",
    effect: "把午后的困倦折成一场小小的重启。",
    side: "可能睡过头，醒来发现会议已经结束。",
    crowd: "午休党、下午断电人、工位补觉选手。",
    review: "“没睡着，但闭眼十五分钟也像充了电，值。”",
    price: "5.5",
    color: "#c9d2ff",
    stars: 4.7,
  },
  {
    id: "work-amnesia",
    emoji: "🌫️",
    name: "职场失忆喷雾",
    en: "WORK AMNESIA",
    tag: "职场续命",
    desc: "忘掉早会内容，但记得下班时间。喷一喷，烦人的细节会暂时模糊。",
    effect: "让重复的职场噪音从记忆里滑走。",
    side: "可能连领导刚交代的任务也忘了，请谨慎使用。",
    crowd: "会议失忆者、重复劳动选手、想清空缓存的人。",
    review: "“忘了早会，也没记住午饭吃什么，但下班记得很清楚。”",
    price: "7.0",
    color: "#b9e7cd",
    stars: 4.5,
  },
  {
    id: "void-leave",
    emoji: "📜",
    name: "宇宙尽头请假条",
    en: "VOID LEAVE",
    tag: "宇宙特供",
    desc: "目的地：无。理由：想休息。批准人：你自己。宇宙尽头不需要打卡。",
    effect: "给疲惫一个不用解释的出口。",
    side: "回到地球后仍需补班，但心态会轻一点。",
    crowd: "需要停下来的人、年假不足者、宇宙尽头打工人。",
    review: "“批了，我自己批的，走出公司那一刻风都是甜的。”",
    price: "0",
    color: "#ffc5b2",
    stars: 5.0,
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

// Legacy sample products are kept only so old collections can still resolve them.
// New accounts start with an empty community shelf.
const COMMUNITY_SEEDS = [
  {
    id: "seed-idle-tank",
    emoji: "🐠",
    name: "电子放空鱼缸",
    en: "IDLE TANK",
    tag: "精神玄学",
    desc: "盯着看三分钟，大脑自动清空。鱼会游，但什么也不解决。",
    effect: "把待机的大脑放进一缸安静的水里。",
    side: "看太久会想去买一个真的鱼缸，然后继续看。",
    crowd: "脑内弹幕太多的人、需要放空的人、工位发呆选手。",
    review: "“看了一会儿，想起自己还有呼吸。”",
    price: "15.0",
    color: "#bde3f2",
    stars: 4.8,
    community: true,
    author: "发呆冠军",
    sales: 7,
  },
  {
    id: "seed-payday-sound",
    emoji: "🔔",
    name: "工资到账音效",
    en: "PAYDAY SOUND",
    tag: "情绪补给",
    desc: "每次打开钱包都响一下，余额不变，但心情会好三秒。",
    effect: "给贫穷的生活加一点仪式感。",
    side: "响完之后看到余额，心情会掉回来。",
    crowd: "等发薪日的人、月光族、需要一点幻觉的人。",
    review: "“响得真好听，像钱真的来过。”",
    price: "1.0",
    color: "#ffe45c",
    stars: 4.5,
    community: true,
    author: "空钱包",
    sales: 18,
  },
  {
    id: "seed-feed-cloak",
    emoji: "🥷",
    name: "朋友圈分组隐身衣",
    en: "FEED CLOAK",
    tag: "社交糊弄",
    desc: "只让想看见的人看见，其余交给宇宙。",
    effect: "让你放心做自己，不用给所有人看。",
    side: "可能连关心你的人也一起隐身了。",
    crowd: "朋友圈精装修业主、分组困难户、表达欲旺盛者。",
    review: "“穿上了，发自拍都不纠结了，虽然没人点赞。”",
    price: "20.0",
    color: "#d9d1ff",
    stars: 4.7,
    community: true,
    author: "仅自己可见",
    sales: 3,
  },
  {
    id: "seed-microwave",
    emoji: "🍱",
    name: "微波炉叮一下",
    en: "MICROWAVE DING",
    tag: "居家玄学",
    desc: "把昨天的心情加热到刚好能吃。",
    effect: "让冷掉的饭菜和冷掉的情绪重新有温度。",
    side: "有些东西热两遍就不好吃了，比如隔夜炸鸡。",
    crowd: "带饭党、深夜加餐者、舍不得扔剩饭的人。",
    review: "“叮完以后，昨天的咖喱好像也原谅了我。”",
    price: "3.3",
    color: "#ffd3a1",
    stars: 4.6,
    community: true,
    author: "剩饭诗人",
    sales: 11,
  },
  {
    id: "seed-goodnight-license",
    emoji: "🌙",
    name: "晚安许可证",
    en: "GOODNIGHT LICENSE",
    tag: "睡眠专区",
    desc: "允许你今晚什么都不做，直接睡。",
    effect: "把未读消息和未完成的事暂时挂在门外。",
    side: "许可证只在今晚有效，明天要重新申请。",
    crowd: "舍不得睡的人、报复性熬夜党、需要被允许休息的人。",
    review: "“拿着它睡了，世界没有塌，消息也没有少。”",
    price: "6.6",
    color: "#c9d2ff",
    stars: 4.9,
    community: true,
    author: "熬夜惯犯",
    sales: 24,
  },
  {
    id: "seed-escape-map",
    emoji: "🗺️",
    name: "工位逃跑计划",
    en: "ESCAPE PLAN",
    tag: "职场续命",
    desc: "一张只有下班后才看得懂的地图。",
    effect: "在脑子里规划一条从工位到自由的路线。",
    side: "地图终点通常是楼下的便利店，不是远方。",
    crowd: "工位幻想家、午休散步党、需要一点出口的人。",
    review: "“按地图走到了楼下，买了瓶水，也算出发过。”",
    price: "12.0",
    color: "#b9e7cd",
    stars: 4.8,
    community: true,
    author: "周一不起床",
    sales: 5,
  },
  {
    id: "seed-friday-wind",
    emoji: "🍃",
    name: "周五下午的风",
    en: "FRIDAY BREEZE",
    tag: "时间管理",
    desc: "只在周五下午出现，带着一点周末的味道。",
    effect: "让最后两个小时变得轻盈一点。",
    side: "周六下午会想念它，但找不到同款。",
    crowd: "周五期待者、准点下班派、需要一点风的人。",
    review: "“吹到了，突然觉得这周也没有那么难熬。”",
    price: "0",
    color: "#bde3f2",
    stars: 5.0,
    community: true,
    author: "摸鱼气象台",
    sales: 31,
  },
  {
    id: "seed-mute-sticker",
    emoji: "🔇",
    name: "会议静音贴",
    en: "MEETING MUTE",
    tag: "职场续命",
    desc: "贴在额头上，发言自动变成点头。",
    effect: "在不想说话的时候保持得体的参与感。",
    side: "可能连真正想说的点子也一起静音。",
    crowd: "会议社恐、远程会议潜水员、需要低调的人。",
    review: "“点了一整场头，领导说我今天状态很稳。”",
    price: "8.8",
    color: "#ffc5b2",
    stars: 4.7,
    community: true,
    author: "社恐小张",
    sales: 9,
  },
];

const ALL_PRODUCTS = [...PRODUCTS, ...RARE_PRODUCTS];
const PRODUCT_MAP = new Map(ALL_PRODUCTS.map((product) => [product.id, product]));
const COMMUNITY_SEED_MAP = new Map(COMMUNITY_SEEDS.map((product) => [product.id, product]));
const LEGACY_STORAGE_KEY = "blackhole-mart.v1";
const ACCOUNT_STORE_KEY = "blackhole-mart.accounts.v1";
const SESSION_KEY = "blackhole-mart.session.v1";
const GAME_STORAGE_PREFIX = "blackhole-mart.game.v2.";
const AUTH_ITERATIONS = 120000;
const AUTHOR_NAME = "夏习清";
const AUTHOR_NAME_KEY = "夏习清";
const AUTHOR_CREDENTIAL_VERSION = 2;
// The preset credential is pre-hashed. The initial password is delivered privately;
// change it from the account panel after the first login. Bump the version if the
// seeded password ever needs a one-time reset on existing browsers.
const AUTHOR_SEED = {
  id: "u_author_xiaxiqing",
  username: AUTHOR_NAME,
  nameKey: AUTHOR_NAME_KEY,
  role: "author",
  salt: "MCFCMckLaciuu00DF8YSzw==",
  hash: "6jZj0Ii4Fp9iA31sWRWkJnXkw8Y3uB7tUwQiuawsEHY=",
  iterations: AUTH_ITERATIONS,
  credentialVersion: AUTHOR_CREDENTIAL_VERSION,
  createdAt: "2026-10-26T00:00:00.000Z",
};
const RESERVED_NAME_KEYS = new Set([AUTHOR_NAME_KEY, "xiaxiqing", "xq1125", "admin"]);
const RARE_CHANCE = 0.075;
const COMMUNITY_DRAW_CHANCE = 0.18;
const DRAW_COST = 8.8;
const MACHINE_STOCK = 8;
const RESTOCK_COST = 8.8;
const CHECKIN_BONUS = 30;
const DUPLICATE_RATE = 0.5;
const ROYALTY_RATE = 0.3;
const STARTING_WALLET = 66;
const BASE_CAPACITY = 8;
const MAX_CAPACITY = 16;
const CAPACITY_STEP = 2;
const CAPACITY_UPGRADE_COSTS = { 8: 88, 10: 188, 12: 288, 14: 388 };
const PRODUCT_COLORS = ["#ffe45c", "#c9d2ff", "#ffc5b2", "#bde3f2", "#f4bdde", "#ffd3a1", "#b9e7cd", "#d9d1ff"];

const state = {
  account: null,
  collection: [],
  codex: [],
  communityCodex: [],
  capacity: BASE_CAPACITY,
  pendingId: null,
  soundOn: true,
  day: "",
  todayCount: 0,
  stock: MACHINE_STOCK,
  catPets: 0,
  current: null,
  isRare: false,
  isDrawing: false,
  mode: "daily",
  wallet: STARTING_WALLET,
  todayEarnings: 0,
  earningsDay: "",
  lastCheckin: "",
  nickname: "",
  userProducts: [],
  lastSale: null,
  selectedEmoji: "🫧",
  isSubmitting: false,
};

const el = {};
let audioContext = null;
let toastTimer = null;
let printTimer = null;
let catBubbleTimer = null;
let copyDialogHintMarkup = "";
let confirmResolver = null;
let confirmReturnFocus = null;
let authBusy = false;
let passwordBusy = false;
let authMode = "register";

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

function roundCoins(value) {
  return Math.round((Number(value) || 0) * 10) / 10;
}

function formatCoins(value) {
  return roundCoins(value).toFixed(1);
}

function priceOf(product) {
  const value = Number.parseFloat(String(product?.price ?? 0).replace(/[^\d.]/g, ""));
  return Number.isFinite(value) ? value : 0;
}

function normalizeCapacity(value) {
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) {
    return BASE_CAPACITY;
  }
  const clamped = Math.min(MAX_CAPACITY, Math.max(BASE_CAPACITY, numeric));
  return BASE_CAPACITY + Math.round((clamped - BASE_CAPACITY) / CAPACITY_STEP) * CAPACITY_STEP;
}

function nextCapacityUpgrade() {
  if (state.capacity >= MAX_CAPACITY) {
    return null;
  }
  return {
    target: Math.min(MAX_CAPACITY, state.capacity + CAPACITY_STEP),
    cost: CAPACITY_UPGRADE_COSTS[state.capacity] || 88,
  };
}

function getCommunityProducts() {
  return [...state.userProducts];
}

function findProduct(id) {
  return (
    PRODUCT_MAP.get(id) ||
    state.userProducts.find((product) => product.id === id) ||
    COMMUNITY_SEED_MAP.get(id) ||
    null
  );
}

function normalizeStoredUserProduct(raw) {
  if (!raw || typeof raw !== "object") {
    return null;
  }

  const id = String(raw.id || "").trim();
  const name = String(raw.name || "").trim().slice(0, 14);
  if (!id || !/^[a-z0-9-]+$/i.test(id) || !name || PRODUCT_MAP.has(id) || COMMUNITY_SEED_MAP.has(id)) {
    return null;
  }

  const price = Math.min(99, Math.max(1, roundCoins(raw.price)));
  const author = String(raw.author || "匿名住客").trim().slice(0, 12) || "匿名住客";
  const color = /^#[0-9a-f]{6}$/i.test(String(raw.color || "")) ? raw.color : PRODUCT_COLORS[0];
  const stars = Number.isFinite(Number(raw.stars)) ? Math.min(5, Math.max(1, Number(raw.stars))) : 4.8;

  return {
    id,
    emoji: String(raw.emoji || "✨").slice(0, 8),
    name,
    en: "COMMUNITY GOODS",
    tag: String(raw.tag || "住客投稿").slice(0, 12),
    desc: String(raw.desc || "一件由住客写下的平行宇宙好物。").slice(0, 60),
    effect: String(raw.effect || `让「${name}」在需要的时候刚好派上用场。`).slice(0, 80),
    side: String(raw.side || "用久了会开始相信，离谱的东西也有它的道理。").slice(0, 80),
    crowd: String(raw.crowd || "所有需要一点想象力的人。").slice(0, 80),
    review: String(raw.review || `“${raw.desc || name}”`).slice(0, 100),
    price: price.toFixed(1),
    unit: "宇宙币",
    color,
    stars,
    rare: false,
    community: true,
    author,
    sales: Math.max(0, Math.floor(Number(raw.sales) || 0)),
    earnings: Math.max(0, roundCoins(raw.earnings)),
    createdAt: Number(raw.createdAt) || Date.now(),
  };
}

function ensureFreshDay() {
  const today = dayKey();
  if (state.day !== today) {
    state.day = today;
    state.todayCount = 0;
    state.stock = MACHINE_STOCK;
    state.todayEarnings = 0;
    state.earningsDay = today;
  }
  if (state.earningsDay !== today) {
    state.earningsDay = today;
    state.todayEarnings = 0;
  }
}

/* ---------- local resident accounts ---------- */

function safeStorageGet(key) {
  try {
    return window.localStorage.getItem(key);
  } catch (error) {
    return null;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
    return true;
  } catch (error) {
    return false;
  }
}

function safeStorageRemove(key) {
  try {
    window.localStorage.removeItem(key);
  } catch (error) {
    /* ignore */
  }
}

function nameKeyOf(value) {
  return String(value || "").trim().normalize("NFKC").toLocaleLowerCase("zh-CN");
}

function readAccountStore() {
  try {
    const raw = safeStorageGet(ACCOUNT_STORE_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (!parsed || !Array.isArray(parsed.users)) {
      return { version: 1, users: [] };
    }
    return {
      version: 1,
      users: parsed.users.filter(
        (user) =>
          user &&
          typeof user.id === "string" &&
          typeof user.username === "string" &&
          typeof user.nameKey === "string" &&
          typeof user.salt === "string" &&
          typeof user.hash === "string",
      ),
    };
  } catch (error) {
    return { version: 1, users: [] };
  }
}

function writeAccountStore(store) {
  return safeStorageSet(ACCOUNT_STORE_KEY, JSON.stringify({ version: 1, users: store.users }));
}

function ensureAuthorAccount() {
  const store = readAccountStore();
  const author = store.users.find((user) => user.nameKey === AUTHOR_NAME_KEY);
  if (!author) {
    store.users.unshift({ ...AUTHOR_SEED });
    writeAccountStore(store);
    return store;
  }
  let changed = false;
  if (author.role !== "author") {
    author.role = "author";
    changed = true;
  }
  if (author.credentialVersion !== AUTHOR_CREDENTIAL_VERSION || !author.salt || !author.hash) {
    author.salt = AUTHOR_SEED.salt;
    author.hash = AUTHOR_SEED.hash;
    author.iterations = AUTH_ITERATIONS;
    author.credentialVersion = AUTHOR_CREDENTIAL_VERSION;
    author.passwordUpdatedAt = Date.now();
    changed = true;
  }
  if (changed) {
    writeAccountStore(store);
  }
  return store;
}

function makeAccountId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return `u_${window.crypto.randomUUID()}`;
  }
  return `u_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}

function validateResidentName(value) {
  const name = String(value || "").trim().normalize("NFKC");
  if (!name) {
    return { error: "先给自己起一个名字。" };
  }
  if (name.length < 2 || name.length > 12) {
    return { error: "住客名需要 2–12 个字。" };
  }
  if (!/^[\u3400-\u9fffA-Za-z0-9_-]+$/.test(name)) {
    return { error: "住客名只能用中英文、数字、_ 或 -，不能有空格。" };
  }
  const key = nameKeyOf(name);
  if (RESERVED_NAME_KEYS.has(key)) {
    return { error: "这个名字已经有人注册了，换一个名字吧。" };
  }
  return { name, key };
}

function validatePassword(password) {
  if (typeof password !== "string" || password.length < 6) {
    return "密码至少写 6 位。";
  }
  if (password.length > 64) {
    return "密码最多 64 位。";
  }
  return "";
}

function supportsLocalCrypto() {
  return Boolean(window.crypto && window.crypto.subtle && window.crypto.getRandomValues);
}

function bytesToBase64(bytes) {
  let binary = "";
  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte);
  });
  return window.btoa(binary);
}

function base64ToBytes(value) {
  const binary = window.atob(value);
  return Uint8Array.from(binary, (character) => character.charCodeAt(0));
}

function randomSalt() {
  const bytes = new Uint8Array(16);
  window.crypto.getRandomValues(bytes);
  return bytesToBase64(bytes);
}

async function hashPassword(password, salt, iterations = AUTH_ITERATIONS) {
  if (!supportsLocalCrypto()) {
    throw new Error("当前浏览器不支持本地加密登录，请换用最新版 Chrome、Edge 或 Safari。");
  }
  const key = await window.crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: base64ToBytes(salt),
      iterations: Number(iterations) || AUTH_ITERATIONS,
      hash: "SHA-256",
    },
    key,
    256,
  );
  return bytesToBase64(new Uint8Array(bits));
}

function hashesMatch(left, right) {
  if (left.length !== right.length) {
    return false;
  }
  let difference = 0;
  for (let index = 0; index < left.length; index += 1) {
    difference |= left.charCodeAt(index) ^ right.charCodeAt(index);
  }
  return difference === 0;
}

function getSessionUserId() {
  return safeStorageGet(SESSION_KEY) || "";
}

function setSession(userId) {
  return safeStorageSet(SESSION_KEY, userId);
}

function clearSession() {
  safeStorageRemove(SESSION_KEY);
}

function getSessionAccount(store = readAccountStore()) {
  const userId = getSessionUserId();
  if (!userId) {
    return null;
  }
  return store.users.find((user) => user.id === userId) || null;
}

function gameStorageKey() {
  return state.account ? `${GAME_STORAGE_PREFIX}${state.account.id}` : "";
}

function formatAccountDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return "未知日期";
  }
  return `${date.getFullYear()}.${pad(date.getMonth() + 1)}.${pad(date.getDate())}`;
}

function cacheElements() {
  el.machine = $("machine");
  el.drawButton = $("drawButton");
  el.drawLabel = el.drawButton.querySelector(".draw-label");
  el.lever = $("lever");
  el.againButton = $("againButton");
  el.copyButton = $("copyButton");
  el.copyButtonLabel = $("copyButtonLabel");
  el.confirmDialog = $("confirmDialog");
  el.confirmTitle = $("confirmTitle");
  el.confirmMessage = $("confirmMessage");
  el.confirmAccept = $("confirmAccept");
  el.confirmCancel = $("confirmCancel");
  el.closeConfirmDialog = $("closeConfirmDialog");
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
  el.machineStock = $("machineStock");
  el.collectionStat = $("collectionStat");
  el.collectionTotal = $("collectionTotal");
  el.vaultCount = $("vaultCount");
  el.openCodex = $("openCodex");
  el.codexButtonCount = $("codexButtonCount");
  el.codexDialog = $("codexDialog");
  el.closeCodex = $("closeCodex");
  el.codexGrid = $("codexGrid");
  el.codexProgressLabel = $("codexProgressLabel");
  el.codexProgressBar = $("codexProgressBar");
  el.driftGrid = $("driftGrid");
  el.driftCount = $("driftCount");
  el.driftOverflow = $("driftOverflow");
  el.vault = document.querySelector(".vault");
  el.vaultGrid = $("vaultGrid");
  el.vaultEmpty = $("vaultEmpty");
  el.vaultCapacityLabel = $("vaultCapacityLabel");
  el.capacityHint = $("capacityHint");
  el.expandVault = $("expandVault");
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
  el.walletPill = $("walletPill");
  el.walletBalance = $("walletBalance");
  el.walletPanelBalance = $("walletPanelBalance");
  el.todayEarnings = $("todayEarnings");
  el.checkinButton = $("checkinButton");
  el.checkinLabel = $("checkinLabel");
  el.drawCost = $("drawCost");
  el.earnLink = $("earnLink");
  el.community = $("community");
  el.communityGrid = $("communityGrid");
  el.communityCount = $("communityCount");
  el.communityFeed = $("communityFeed");
  el.openSubmit = $("openSubmit");
  el.submitDialog = $("submitDialog");
  el.closeSubmitDialog = $("closeSubmitDialog");
  el.cancelSubmit = $("cancelSubmit");
  el.submitForm = $("submitForm");
  el.submitFormView = $("submitFormView");
  el.submitSuccessView = $("submitSuccessView");
  el.itemName = $("itemName");
  el.itemPrice = $("itemPrice");
  el.itemDesc = $("itemDesc");
  el.itemTag = $("itemTag");
  el.itemSide = $("itemSide");
  el.itemAuthor = $("itemAuthor");
  el.emojiPicker = $("emojiPicker");
  el.priceTiers = $("priceTiers");
  el.formFee = $("formFee");
  el.formError = $("formError");
  el.submitButton = $("submitButton");
  el.successEmoji = $("successEmoji");
  el.successName = $("successName");
  el.successAuthor = $("successAuthor");
  el.successPrice = $("successPrice");
  el.successFee = $("successFee");
  el.successRoyalty = $("successRoyalty");
  el.successTotal = $("successTotal");
  el.writeAnother = $("writeAnother");
  el.backToShelf = $("backToShelf");
  el.walletPanelLabel = $("walletPanelLabel");
  el.accountButton = $("accountButton");
  el.accountAvatar = $("accountAvatar");
  el.accountName = $("accountName");
  el.accountDialog = $("accountDialog");
  el.closeAccountDialog = $("closeAccountDialog");
  el.accountBigAvatar = $("accountBigAvatar");
  el.accountDialogTitle = $("accountDialogTitle");
  el.accountRole = $("accountRole");
  el.accountMeta = $("accountMeta");
  el.accountNote = $("accountNote");
  el.passwordForm = $("passwordForm");
  el.currentPassword = $("currentPassword");
  el.newPassword = $("newPassword");
  el.confirmNewPassword = $("confirmNewPassword");
  el.passwordError = $("passwordError");
  el.passwordSuccess = $("passwordSuccess");
  el.changePasswordButton = $("changePasswordButton");
  el.logoutButton = $("logoutButton");
  el.closeAccountButton = $("closeAccountButton");
  el.authGate = $("authGate");
  el.registerTab = $("registerTab");
  el.loginTab = $("loginTab");
  el.registerForm = $("registerForm");
  el.loginForm = $("loginForm");
  el.registerName = $("registerName");
  el.registerPassword = $("registerPassword");
  el.registerConfirm = $("registerConfirm");
  el.registerError = $("registerError");
  el.registerButton = $("registerButton");
  el.loginName = $("loginName");
  el.loginPassword = $("loginPassword");
  el.loginError = $("loginError");
  el.loginButton = $("loginButton");
}

/* ---------- resident gate ---------- */

function setAuthError(scope, message) {
  const node = scope === "login" ? el.loginError : el.registerError;
  if (node) {
    node.textContent = message || "";
  }
}

function setAuthBusy(busy) {
  authBusy = busy;
  [el.registerButton, el.loginButton, el.registerTab, el.loginTab].forEach((node) => {
    if (node) {
      node.disabled = busy;
    }
  });
  if (el.authGate) {
    el.authGate.classList.toggle("is-busy", busy);
  }
}

function setPasswordBusy(busy) {
  passwordBusy = busy;
  if (el.changePasswordButton) {
    el.changePasswordButton.disabled = busy;
    el.changePasswordButton.textContent = busy ? "更新中…" : "更新密码";
  }
}

function setAuthMode(mode, shouldFocus = true) {
  authMode = mode === "login" ? "login" : "register";
  const isLogin = authMode === "login";
  if (!el.registerTab || !el.loginTab) {
    return;
  }
  el.registerTab.classList.toggle("is-active", !isLogin);
  el.loginTab.classList.toggle("is-active", isLogin);
  el.registerTab.setAttribute("aria-pressed", String(!isLogin));
  el.loginTab.setAttribute("aria-pressed", String(isLogin));
  el.registerForm.hidden = isLogin;
  el.loginForm.hidden = !isLogin;
  setAuthError("register", "");
  setAuthError("login", "");
  if (shouldFocus) {
    window.setTimeout(() => {
      const target = isLogin ? el.loginName : el.registerName;
      if (target) {
        target.focus({ preventScroll: true });
      }
    }, 20);
  }
}

function lockAppShell(locked) {
  const shells = [
    document.querySelector(".site-header"),
    document.querySelector("main"),
    document.querySelector(".site-footer"),
  ];
  shells.forEach((node) => {
    if (node) {
      if ("inert" in node) {
        node.inert = locked;
      } else {
        node.setAttribute("aria-hidden", String(locked));
      }
    }
  });
}

function showAuthGate() {
  if (!el.authGate) {
    return;
  }
  el.authGate.hidden = false;
  document.body.classList.add("auth-locked");
  lockAppShell(true);
  setAuthMode(authMode, false);
  window.setTimeout(() => {
    const target = authMode === "login" ? el.loginName : el.registerName;
    if (target) {
      target.focus({ preventScroll: true });
    }
  }, 80);
}

function hideAuthGate() {
  if (!el.authGate) {
    return;
  }
  el.authGate.hidden = true;
  document.body.classList.remove("auth-locked");
  lockAppShell(false);
}

async function handleRegister(event) {
  event.preventDefault();
  if (authBusy) {
    return;
  }
  setAuthError("register", "");

  const nameResult = validateResidentName(el.registerName.value);
  if (nameResult.error) {
    setAuthError("register", nameResult.error);
    el.registerName.focus();
    return;
  }

  const password = el.registerPassword.value;
  const passwordError = validatePassword(password);
  if (passwordError) {
    setAuthError("register", passwordError);
    el.registerPassword.focus();
    return;
  }
  if (password !== el.registerConfirm.value) {
    setAuthError("register", "两次输入的密码不一样。");
    el.registerConfirm.focus();
    return;
  }
  if (!supportsLocalCrypto()) {
    setAuthError("register", "当前浏览器不支持本地加密登录，请换用最新版 Chrome、Edge 或 Safari。");
    return;
  }

  setAuthBusy(true);
  try {
    const store = ensureAuthorAccount();
    if (store.users.some((user) => nameKeyOf(user.username) === nameResult.key)) {
      setAuthError("register", "这个名字已经有人注册了，换一个名字吧。");
      return;
    }

    const salt = randomSalt();
    const hash = await hashPassword(password, salt, AUTH_ITERATIONS);
    const user = {
      id: makeAccountId(),
      username: nameResult.name,
      nameKey: nameResult.key,
      role: "resident",
      salt,
      hash,
      iterations: AUTH_ITERATIONS,
      createdAt: new Date().toISOString(),
      passwordUpdatedAt: Date.now(),
    };

    store.users.push(user);
    if (!writeAccountStore(store)) {
      setAuthError("register", "浏览器不允许保存账号，请检查隐私模式或站点存储权限。");
      return;
    }
    if (!setSession(user.id)) {
      setAuthError("register", "账号建好了，但登录状态保存失败，请重试。");
      return;
    }
    window.location.reload();
  } catch (error) {
    setAuthError("register", error?.message || "登记失败，请再试一次。");
  } finally {
    setAuthBusy(false);
  }
}

async function handleLogin(event) {
  event.preventDefault();
  if (authBusy) {
    return;
  }
  setAuthError("login", "");

  const username = el.loginName.value.trim();
  if (!username) {
    setAuthError("login", "先输入住客名。");
    el.loginName.focus();
    return;
  }
  const password = el.loginPassword.value;
  if (!password) {
    setAuthError("login", "再输入密码。");
    el.loginPassword.focus();
    return;
  }

  setAuthBusy(true);
  try {
    const store = ensureAuthorAccount();
    const user = store.users.find((entry) => entry.nameKey === nameKeyOf(username));
    if (!user) {
      setAuthError("login", "没有找到这个名字，先去注册一个吧。");
      return;
    }
    const hash = await hashPassword(password, user.salt, user.iterations || AUTH_ITERATIONS);
    if (!hashesMatch(hash, user.hash)) {
      setAuthError("login", "名字或密码不对，再检查一下。");
      return;
    }
    if (!setSession(user.id)) {
      setAuthError("login", "登录状态保存失败，请重试。");
      return;
    }
    window.location.reload();
  } catch (error) {
    setAuthError("login", error?.message || "进店失败，请再试一次。");
  } finally {
    setAuthBusy(false);
  }
}

function removeLegacyAuthCopy() {
  document.querySelectorAll(".auth-hint").forEach((node) => {
    if (node.textContent.includes("作者账号")) {
      node.remove();
    }
  });
}

function bindAuthEvents() {
  el.registerTab.addEventListener("click", () => setAuthMode("register"));
  el.loginTab.addEventListener("click", () => setAuthMode("login"));
  el.registerForm.addEventListener("submit", handleRegister);
  el.loginForm.addEventListener("submit", handleLogin);

  [
    [el.registerName, "register"],
    [el.registerPassword, "register"],
    [el.registerConfirm, "register"],
    [el.loginName, "login"],
    [el.loginPassword, "login"],
  ].forEach(([node, scope]) => {
    node.addEventListener("input", () => setAuthError(scope, ""));
  });
}

/* ---------- account panel ---------- */

function accountInitial(name) {
  return Array.from(String(name || "住"))[0] || "住";
}

function updateAccountDialog() {
  if (!state.account) {
    return;
  }
  const name = state.account.username;

  el.accountBigAvatar.textContent = accountInitial(name);
  el.accountDialogTitle.textContent = name;
  el.accountRole.textContent = "住客 · 本机账号";
  el.accountMeta.textContent = `本机账号 · 注册于 ${formatAccountDate(state.account.createdAt)}`;
  el.accountNote.textContent = "这个名字已经注册。同一台设备上的其他住客不能重复使用它。";
  el.passwordError.textContent = "";
  el.passwordSuccess.textContent = "";
  el.currentPassword.value = "";
  el.newPassword.value = "";
  el.confirmNewPassword.value = "";
}

function updateProfileUi() {
  if (!state.account) {
    return;
  }
  const name = state.account.username;
  const initial = accountInitial(name);

  el.accountName.textContent = name;
  el.accountAvatar.textContent = initial;
  el.accountButton.setAttribute("aria-label", `我的账号：${name}`);
  el.accountButton.title = `账号：${name}`;
  el.walletPanelLabel.textContent = `${name}的宇宙币`;
  updateAccountDialog();
}

function openAccountDialog() {
  if (!state.account) {
    return;
  }
  updateAccountDialog();
  if (!el.accountDialog.open) {
    el.accountDialog.showModal();
  }
  document.body.classList.add("has-dialog");
}

function closeAccountDialog() {
  if (el.accountDialog.open) {
    el.accountDialog.close();
  }
}

function logoutAccount() {
  persistState();
  clearSession();
  window.location.reload();
}

async function handlePasswordChange(event) {
  event.preventDefault();
  if (passwordBusy || !state.account) {
    return;
  }
  el.passwordError.textContent = "";
  el.passwordSuccess.textContent = "";

  const current = el.currentPassword.value;
  const next = el.newPassword.value;
  const confirm = el.confirmNewPassword.value;
  if (!current) {
    el.passwordError.textContent = "先输入当前密码。";
    el.currentPassword.focus();
    return;
  }
  const passwordError = validatePassword(next);
  if (passwordError) {
    el.passwordError.textContent = passwordError;
    el.newPassword.focus();
    return;
  }
  if (next !== confirm) {
    el.passwordError.textContent = "两次输入的新密码不一样。";
    el.confirmNewPassword.focus();
    return;
  }
  if (next === current) {
    el.passwordError.textContent = "新密码不要和当前密码一样。";
    el.newPassword.focus();
    return;
  }

  setPasswordBusy(true);
  try {
    const store = readAccountStore();
    const user = store.users.find((entry) => entry.id === state.account.id);
    if (!user) {
      el.passwordError.textContent = "账号档案找不到了，请重新登录。";
      return;
    }
    const currentHash = await hashPassword(current, user.salt, user.iterations || AUTH_ITERATIONS);
    if (!hashesMatch(currentHash, user.hash)) {
      el.passwordError.textContent = "当前密码不对。";
      el.currentPassword.focus();
      return;
    }
    const salt = randomSalt();
    const hash = await hashPassword(next, salt, AUTH_ITERATIONS);
    user.salt = salt;
    user.hash = hash;
    user.iterations = AUTH_ITERATIONS;
    user.passwordUpdatedAt = Date.now();
    if (!writeAccountStore(store)) {
      el.passwordError.textContent = "浏览器不允许保存新密码，请检查站点存储权限。";
      return;
    }
    state.account = user;
    el.currentPassword.value = "";
    el.newPassword.value = "";
    el.confirmNewPassword.value = "";
    el.passwordSuccess.textContent = "密码已更新，下次用新密码进店。";
  } catch (error) {
    el.passwordError.textContent = error?.message || "密码更新失败，请再试一次。";
  } finally {
    setPasswordBusy(false);
  }
}

function bindAccountEvents() {
  el.accountButton.addEventListener("click", openAccountDialog);
  el.closeAccountDialog.addEventListener("click", closeAccountDialog);
  el.closeAccountButton.addEventListener("click", closeAccountDialog);
  el.logoutButton.addEventListener("click", logoutAccount);
  el.passwordForm.addEventListener("submit", handlePasswordChange);
  [el.currentPassword, el.newPassword, el.confirmNewPassword].forEach((input) => {
    input.addEventListener("input", () => {
      el.passwordError.textContent = "";
      el.passwordSuccess.textContent = "";
    });
  });
  el.accountDialog.addEventListener("click", (event) => {
    if (event.target === el.accountDialog) {
      closeAccountDialog();
    }
  });
  el.accountDialog.addEventListener("close", () => {
    syncDialogLock();
    el.accountButton.focus({ preventScroll: true });
  });
}

/* ---------- persistence ---------- */

function loadState() {
  let saved = null;
  let migratedLegacy = false;
  try {
    const storageKey = gameStorageKey();
    let raw = storageKey ? safeStorageGet(storageKey) : null;
    if (!raw && state.account?.role === "author") {
      const legacy = safeStorageGet(LEGACY_STORAGE_KEY);
      if (legacy) {
        raw = legacy;
        migratedLegacy = true;
      }
    }
    saved = raw ? JSON.parse(raw) : null;
  } catch (error) {
    saved = null;
  }

  const today = dayKey();
  const storedUsers = Array.isArray(saved?.userProducts) ? saved.userProducts : [];
  const seenUserIds = new Set();
  state.userProducts = storedUsers
    .map(normalizeStoredUserProduct)
    .filter((product) => {
      if (!product || seenUserIds.has(product.id)) {
        return false;
      }
      seenUserIds.add(product.id);
      return true;
    });

  const storedCollection = Array.isArray(saved?.collection) ? saved.collection : [];
  state.collection = [...new Set(storedCollection)].filter((id) => Boolean(findProduct(id)));
  const storedCodex = Array.isArray(saved?.codex) ? saved.codex : [];
  state.codex = [...new Set([
    ...storedCodex.filter((id) => PRODUCT_MAP.has(id)),
    ...state.collection.filter((id) => PRODUCT_MAP.has(id)),
  ])];
  const codexMigrated = state.codex.some((id) => !storedCodex.includes(id));
  const storedCommunityCodex = Array.isArray(saved?.communityCodex) ? saved.communityCodex : [];
  state.communityCodex = [...new Set([
    ...storedCommunityCodex.filter((id) => Boolean(findProduct(id)?.community)),
    ...state.collection.filter((id) => Boolean(findProduct(id)?.community)),
  ])];
  const communityMigrated = state.communityCodex.some((id) => !storedCommunityCodex.includes(id));
  state.capacity = normalizeCapacity(saved?.capacity);
  const storedPending = typeof saved?.pendingId === "string" ? findProduct(saved.pendingId) : null;
  state.pendingId =
    storedPending && !state.collection.includes(storedPending.id) ? storedPending.id : null;
  state.soundOn = saved?.soundOn !== false;
  state.catPets = Number.isFinite(saved?.catPets) ? saved.catPets : 0;
  state.wallet = Number.isFinite(saved?.wallet) ? Math.max(0, roundCoins(saved.wallet)) : STARTING_WALLET;
  state.nickname =
    typeof saved?.nickname === "string" && saved.nickname.trim()
      ? saved.nickname.slice(0, 12)
      : state.account?.username || "";
  state.lastCheckin = typeof saved?.lastCheckin === "string" ? saved.lastCheckin : "";
  state.day = today;
  state.todayCount = saved?.day === today && Number.isFinite(saved?.todayCount) ? saved.todayCount : 0;
  state.stock =
    saved?.day === today && Number.isFinite(saved?.stock)
      ? Math.min(MACHINE_STOCK, Math.max(0, Math.floor(saved.stock)))
      : MACHINE_STOCK;
  state.earningsDay = today;
  state.todayEarnings =
    saved?.earningsDay === today && Number.isFinite(saved?.todayEarnings) ? roundCoins(saved.todayEarnings) : 0;

  if (saved?.lastSale && typeof saved.lastSale === "object" && saved.lastSale.name) {
    state.lastSale = {
      name: String(saved.lastSale.name).slice(0, 40),
      revenue: roundCoins(saved.lastSale.revenue),
      author: String(saved.lastSale.author || "").slice(0, 16),
      at: Number(saved.lastSale.at) || Date.now(),
    };
  }

  const savedProduct = typeof saved?.currentId === "string" ? findProduct(saved.currentId) : null;
  const pendingProduct = state.pendingId ? findProduct(state.pendingId) : null;
  if (pendingProduct) {
    state.current = pendingProduct;
    state.isRare = Boolean(pendingProduct.rare);
    state.mode = "draw";
  } else if (savedProduct) {
    state.current = savedProduct;
    state.isRare = Boolean(savedProduct.rare);
    state.mode = "restore";
  } else {
    state.current = dailyProduct();
    state.isRare = Boolean(state.current.rare);
    state.mode = "daily";
  }

  if (migratedLegacy) {
    persistState();
    safeStorageRemove(LEGACY_STORAGE_KEY);
  } else if (codexMigrated || communityMigrated) {
    persistState();
  }
}

function persistState() {
  const storageKey = gameStorageKey();
  if (!storageKey) {
    return;
  }
  try {
    window.localStorage.setItem(
      storageKey,
      JSON.stringify({
        collection: state.collection,
        codex: state.codex,
        communityCodex: state.communityCodex,
        capacity: state.capacity,
        pendingId: state.pendingId,
        soundOn: state.soundOn,
        day: state.day,
        todayCount: state.todayCount,
        stock: state.stock,
        catPets: state.catPets,
        currentId: state.current ? state.current.id : null,
        wallet: state.wallet,
        todayEarnings: state.todayEarnings,
        earningsDay: state.earningsDay,
        lastCheckin: state.lastCheckin,
        nickname: state.nickname,
        userProducts: state.userProducts,
        lastSale: state.lastSale,
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

function stickerForMode(product, mode, fromVault, customLabel) {
  if (product.rare) {
    return "隐藏款 · 恭喜";
  }
  if (customLabel) {
    return customLabel;
  }
  if (fromVault) {
    return "仓库翻出";
  }
  if (mode === "community") {
    return "共创货架";
  }
  if (product.community && mode === "draw") {
    return "住客投稿";
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
  const { mode = state.mode, print = false, fromVault = false, sticker = "" } = options;

  state.current = product;
  state.isRare = Boolean(product.rare);
  state.mode = mode;

  const isRare = Boolean(product.rare);
  const isCommunity = Boolean(product.community);
  el.receiptWrap.style.setProperty("--accent", product.color);
  el.receiptWrap.classList.toggle("is-rare", isRare);
  el.receiptWrap.classList.toggle("is-community", isCommunity);
  el.receipt.classList.toggle("is-rare", isRare);
  el.receipt.classList.toggle("is-community", isCommunity);

  const serial = currentSerial();
  const now = new Date();
  const shortDate = `${pad(now.getMonth() + 1)}${pad(now.getDate())}`;

  el.receiptDate.textContent = formatTimestamp(now);
  el.receiptNo.textContent = `NO. 404-${shortDate}-${serial}${isRare ? "R" : ""}`;
  el.receiptSticker.textContent = stickerForMode(product, mode, fromVault, sticker);
  if (state.pendingId && product.id === state.pendingId) {
    el.receiptSticker.textContent = "待入库 · 复制小票";
  }
  el.productEmoji.textContent = product.emoji;
  el.productTag.textContent = product.tag;
  el.productName.textContent = product.name;
  el.productEn.textContent = isCommunity
    ? `COMMUNITY GOODS · @${product.author || "匿名住客"}`
    : product.en;
  el.productPrice.textContent = product.price;
  el.productUnit.textContent = product.unit || "宇宙币";
  el.productDesc.textContent = product.desc;
  el.productEffect.textContent = product.effect;
  el.productSide.textContent = product.side;
  el.productFor.textContent = product.crowd;
  el.productReview.textContent = product.review;
  el.stars.innerHTML = `★★★★★ <b>${Number(product.stars).toFixed(1)}</b>`;
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
  updateClaimUi();
}

function updateClaimUi() {
  if (!el.copyButtonLabel) {
    return;
  }
  const pending = Boolean(state.pendingId);
  el.copyButtonLabel.textContent = pending ? "复制小票并入仓" : "复制这张小票";
  el.copyButton.classList.toggle("is-claim", pending);
  el.copyButton.title = pending ? "复制小票，把这件好物收进仓库" : "复制这张小票";
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
  const officialFound = state.codex.length;

  el.todayCount.textContent = String(state.todayCount);
  el.machineStock.textContent = String(state.stock);
  el.machineStock.classList.toggle("is-empty", state.stock <= 0);
  el.collectionStat.textContent = String(officialFound);
  el.collectionTotal.textContent = String(total);
  const vaultLength = state.collection.length;
  el.vaultCount.textContent = `${String(vaultLength).padStart(2, "0")}/${String(state.capacity).padStart(2, "0")}`;
  el.codexButtonCount.textContent = `${officialFound} / ${total}`;
  updateCapacityUi();
  if (el.codexDialog && el.codexDialog.open) {
    renderCodex();
  }
}

function updateCapacityUi() {
  if (!el.vaultCapacityLabel || !el.expandVault) {
    return;
  }

  const length = state.collection.length;
  const capacity = state.capacity;
  const upgrade = nextCapacityUpgrade();
  el.vaultCapacityLabel.textContent = `${length} / ${capacity}`;
  el.vaultCapacityLabel.classList.toggle("is-over", length > capacity);

  if (upgrade) {
    el.expandVault.hidden = false;
    el.expandVault.textContent = `扩容至 ${upgrade.target} · ${upgrade.cost} 币`;
    el.expandVault.setAttribute(
      "aria-label",
      `扩容仓库至 ${upgrade.target} 件，花费 ${upgrade.cost} 宇宙币`,
    );
    el.expandVault.classList.toggle("is-unaffordable", state.wallet + 0.001 < upgrade.cost);
    if (length > capacity) {
      el.capacityHint.textContent = `超出 ${length - capacity} 件，先移除`;
    } else if (length === capacity) {
      el.capacityHint.textContent = "仓库已满，先移除或扩容";
    } else {
      el.capacityHint.textContent = `还能放 ${capacity - length} 件`;
    }
  } else {
    el.expandVault.hidden = true;
    if (length > capacity) {
      el.capacityHint.textContent = `超出 ${length - capacity} 件，请先移除`;
    } else if (length === capacity) {
      el.capacityHint.textContent = "容量已满级 16 件 · 仓库已满";
    } else {
      el.capacityHint.textContent = `容量已满级 16 件 · 还能放 ${capacity - length} 件`;
    }
  }
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
  if (product.community) {
    button.classList.add("is-community");
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
  meta.textContent = product.community
    ? `共创 · ${product.price} 币 · @${product.author || "住客"}`
    : `${product.price} ${product.unit || "宇宙币"} · ★ ${Number(product.stars).toFixed(1)}`;

  button.append(indexLabel, emoji, name, meta);

  const cell = document.createElement("div");
  cell.className = "vault-cell";
  const remove = document.createElement("button");
  remove.type = "button";
  remove.className = "vault-remove";
  remove.dataset.removeId = product.id;
  remove.setAttribute("aria-label", `从仓库移除 ${product.name}`);
  remove.title = `从仓库移除《${product.name}》`;
  remove.textContent = "×";
  cell.append(button, remove);
  return cell;
}

function renderVault(newId = null) {
  const fragment = document.createDocumentFragment();
  state.collection.forEach((id, index) => {
    const product = findProduct(id);
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

function addToCodex(product) {
  if (!product || !PRODUCT_MAP.has(product.id) || state.codex.includes(product.id)) {
    return false;
  }
  state.codex.push(product.id);
  return true;
}

function addToCommunityCodex(product) {
  if (!product || !product.community || state.communityCodex.includes(product.id)) {
    return false;
  }
  state.communityCodex.push(product.id);
  return true;
}

function renderCodex() {
  if (!el.codexGrid) {
    return;
  }

  const total = ALL_PRODUCTS.length;
  const fragment = document.createDocumentFragment();
  ALL_PRODUCTS.forEach((product, index) => {
    const found = state.codex.includes(product.id);
    const cell = document.createElement("div");
    cell.className = "codex-cell";
    cell.setAttribute("role", "listitem");
    cell.setAttribute("aria-label", found ? `已点亮：${product.name}` : "未点亮");
    if (found) {
      cell.classList.add("is-found");
      cell.style.setProperty("--accent", product.color);
      if (product.rare) {
        cell.classList.add("is-rare");
      }
      cell.title = product.name;
    } else {
      cell.classList.add("is-locked");
    }

    const number = document.createElement("span");
    number.className = "codex-index";
    number.textContent = String(index + 1).padStart(2, "0");
    const name = document.createElement("span");
    name.className = "codex-name";
    name.textContent = found ? product.name : "???";
    cell.append(number, name);
    fragment.append(cell);
  });

  el.codexGrid.replaceChildren(fragment);
  const percent = total ? Math.round((state.codex.length / total) * 100) : 0;
  el.codexProgressLabel.textContent = `${state.codex.length} / ${total}`;
  el.codexProgressBar.style.width = `${percent}%`;
  el.codexProgressBar.parentElement.setAttribute(
    "aria-label",
    `图鉴进度 ${state.codex.length} / ${total}`,
  );
  el.codexButtonCount.textContent = `${state.codex.length} / ${total}`;
  renderDriftBottles();
}

function renderDriftBottles() {
  if (!el.driftGrid) {
    return;
  }

  const visible = state.userProducts.slice(0, 8);
  const litCount = state.userProducts.filter((product) =>
    state.communityCodex.includes(product.id),
  ).length;
  const fragment = document.createDocumentFragment();

  for (let index = 0; index < 8; index += 1) {
    const product = visible[index];
    const bottle = document.createElement("div");
    bottle.className = "drift-bottle";
    bottle.setAttribute("role", "listitem");

    const shape = document.createElement("span");
    shape.className = "bottle-shape";
    shape.setAttribute("aria-hidden", "true");
    const name = document.createElement("span");
    name.className = "bottle-name";
    const status = document.createElement("span");
    status.className = "bottle-status";

    if (!product) {
      bottle.classList.add("is-empty");
      name.textContent = "待漂流";
      status.textContent = "空瓶";
      bottle.setAttribute("aria-label", "空瓶");
    } else if (state.communityCodex.includes(product.id)) {
      bottle.classList.add("is-lit");
      bottle.style.setProperty("--accent", product.color || "var(--yellow)");
      name.textContent = product.name;
      status.textContent = "已捞到";
      bottle.title = product.name;
      bottle.setAttribute("aria-label", `已捞到：${product.name}`);
    } else {
      bottle.classList.add("is-unlit");
      name.textContent = "???";
      status.textContent = "还没捞到";
      bottle.setAttribute("aria-label", "还没捞到");
    }

    bottle.append(shape, name, status);
    fragment.append(bottle);
  }

  el.driftGrid.replaceChildren(fragment);
  el.driftCount.textContent = `${litCount} 件已捞到`;
  const overflow = state.userProducts.length - visible.length;
  el.driftOverflow.hidden = overflow <= 0;
  el.driftOverflow.textContent = overflow > 0
    ? `还有 ${overflow} 个漂流瓶在海上，先展示最近 8 个。`
    : "";
}

function openCodexDialog() {
  if (!el.codexDialog) {
    return;
  }
  renderCodex();
  document.body.classList.add("has-dialog");
  if (!el.codexDialog.open) {
    el.codexDialog.showModal();
  }
  window.requestAnimationFrame(() => el.closeCodex.focus({ preventScroll: true }));
}

function closeCodexDialog() {
  if (el.codexDialog && el.codexDialog.open) {
    el.codexDialog.close();
  }
}

/* ---------- economy ---------- */

function pulseWallet(kind) {
  if (el.walletPill) {
    el.walletPill.classList.remove("is-crediting", "is-spending");
    // Restart the tiny wallet animation on every credit or debit.
    void el.walletPill.offsetWidth;
    el.walletPill.classList.add(kind === "spend" ? "is-spending" : "is-crediting");
    window.setTimeout(() => {
      el.walletPill?.classList.remove("is-crediting", "is-spending");
    }, 720);
  }
}

function updateWalletUi(pulse = "") {
  if (!el.walletBalance) {
    return;
  }

  const balance = formatCoins(state.wallet);
  const claimed = state.lastCheckin === dayKey();
  const freeDraw = state.wallet + 0.001 < DRAW_COST;
  const vaultFull = state.collection.length >= state.capacity;
  const pending = Boolean(state.pendingId);
  const emptyStock = state.stock <= 0;

  el.walletBalance.textContent = balance;
  el.walletPanelBalance.textContent = balance;
  el.todayEarnings.textContent = `今日进账 +${formatCoins(state.todayEarnings)}`;
  el.checkinButton.disabled = claimed;
  el.checkinLabel.textContent = claimed ? "今日已签到" : `今日签到 +${CHECKIN_BONUS}`;
  el.drawCost.textContent = pending
    ? "先复制小票"
    : vaultFull
      ? "仓库已满"
      : emptyStock
        ? `补货 ${formatCoins(RESTOCK_COST)} 币`
        : freeDraw
          ? "店长请客"
          : `−${formatCoins(DRAW_COST)} 币`;
  el.drawCost.classList.toggle("is-free", freeDraw && !vaultFull && !pending && !emptyStock);
  el.drawCost.classList.toggle("is-full", vaultFull && !pending);
  el.drawCost.classList.toggle("is-pending", pending);
  el.drawCost.classList.toggle("is-restock", emptyStock && !pending && !vaultFull);
  updateCapacityUi();
  el.walletPill.setAttribute(
    "aria-label",
    `我的宇宙币 ${balance}，前往共创货架赚币`,
  );

  if (pulse) {
    pulseWallet(pulse);
  }
}

function creditCoins(amount) {
  const value = roundCoins(Math.max(0, amount));
  state.wallet = roundCoins(state.wallet + value);
  state.todayEarnings = roundCoins(state.todayEarnings + value);
  updateWalletUi("credit");
  return value;
}

function spendCoins(amount) {
  const value = roundCoins(Math.max(0, amount));
  state.wallet = Math.max(0, roundCoins(state.wallet - value));
  updateWalletUi("spend");
  return value;
}

function playCoinSound() {
  tone(880, 0, 0.07, { type: "sine", volume: 0.02 });
  tone(1174.66, 0.07, 0.12, { type: "sine", volume: 0.018 });
  tone(1567.98, 0.16, 0.2, { type: "sine", volume: 0.014 });
}

function claimDailyBonus() {
  ensureFreshDay();
  if (state.lastCheckin === state.day) {
    showToast("今天已经签到过了，明天再来领。");
    return;
  }

  state.lastCheckin = state.day;
  creditCoins(CHECKIN_BONUS);
  persistState();
  playCoinSound();
  showToast(`签到成功，宇宙币 +${CHECKIN_BONUS}。今天也请多关照。`, 3000);
}

function maybeRunCommunitySale() {
  if (state.userProducts.length === 0 || Math.random() > 0.42) {
    return null;
  }

  const product = state.userProducts[Math.floor(Math.random() * state.userProducts.length)];
  const revenue = Math.max(1, roundCoins(priceOf(product) * ROYALTY_RATE));
  product.sales = (Number(product.sales) || 0) + 1;
  product.earnings = roundCoins((Number(product.earnings) || 0) + revenue);
  state.lastSale = {
    name: product.name,
    revenue,
    author: product.author,
    at: Date.now(),
  };
  creditCoins(revenue);
  renderCommunity();
  return { product, revenue };
}

function sellDuplicate(product) {
  const credit = Math.max(1, roundCoins(priceOf(product) * DUPLICATE_RATE));
  creditCoins(credit);
  return credit;
}

/* ---------- community shelf ---------- */

function updateCommunityFeed() {
  if (!el.communityFeed) {
    return;
  }

  if (state.lastSale && dayKey(new Date(state.lastSale.at)) === dayKey()) {
    const author = state.lastSale.author ? `@${state.lastSale.author}` : "一位住客";
    el.communityFeed.textContent = `小店动态：${author} 的《${state.lastSale.name}》刚被一位路过的宇航员买走，分成 +${formatCoins(state.lastSale.revenue)} 币。`;
    return;
  }

  el.communityFeed.textContent = "小店动态：猫店长正在核对今天的账本，货架暂时很安静。";
}

function makeCommunityCard(product, isOwn, newId) {
  const button = document.createElement("button");
  button.type = "button";
  button.className = "community-card";
  button.dataset.id = product.id;
  button.style.setProperty("--accent", product.color);
  button.setAttribute("aria-label", `查看住客投稿 ${product.name}，作者 ${product.author || "匿名住客"}`);
  if (isOwn) {
    button.classList.add("is-own");
  }
  if (product.id === newId) {
    button.classList.add("is-new");
  }

  const top = document.createElement("span");
  top.className = "community-card-top";

  const authorWrap = document.createElement("span");
  authorWrap.className = "community-author";
  const avatar = document.createElement("span");
  avatar.className = "community-avatar";
  avatar.setAttribute("aria-hidden", "true");
  avatar.textContent = (product.author || "匿").slice(0, 1);
  const authorName = document.createElement("span");
  authorName.className = "community-author-name";
  authorName.textContent = `@${product.author || "匿名住客"}`;
  const badge = document.createElement("span");
  badge.className = "community-badge";
  badge.textContent = isOwn ? "我的作品" : "住客投稿";
  authorWrap.append(avatar, authorName, badge);

  const price = document.createElement("span");
  price.className = "community-price";
  price.textContent = `${product.price} 币`;
  top.append(authorWrap, price);

  const body = document.createElement("span");
  body.className = "community-body";
  const emoji = document.createElement("span");
  emoji.className = "community-emoji";
  emoji.setAttribute("aria-hidden", "true");
  emoji.textContent = product.emoji;

  const copy = document.createElement("span");
  copy.className = "community-copy";
  const name = document.createElement("span");
  name.className = "community-name";
  name.textContent = product.name;
  const desc = document.createElement("span");
  desc.className = "community-desc";
  desc.textContent = product.desc;
  copy.append(name, desc);
  body.append(emoji, copy);

  const bottom = document.createElement("span");
  bottom.className = "community-card-bottom";
  const sales = document.createElement("span");
  sales.className = "community-sales";
  sales.textContent = `已售 ${Number(product.sales) || 0} 件`;
  const royalty = document.createElement("span");
  royalty.className = "community-royalty";
  royalty.textContent = `分成 ${formatCoins(Math.max(1, priceOf(product) * ROYALTY_RATE))} 币/件`;
  bottom.append(sales, royalty);

  button.append(top, body, bottom);
  return button;
}

function makeMaskedCommunitySample(color) {
  const card = document.createElement("div");
  card.className = "community-card is-masked";
  card.setAttribute("aria-hidden", "true");
  card.style.setProperty("--accent", color);

  const top = document.createElement("span");
  top.className = "community-card-top";
  const author = document.createElement("span");
  author.className = "community-author";
  const avatar = document.createElement("span");
  avatar.className = "community-avatar";
  avatar.textContent = "?";
  const name = document.createElement("span");
  name.className = "community-author-name";
  name.textContent = "@匿名住客";
  const badge = document.createElement("span");
  badge.className = "community-badge";
  badge.textContent = "打码样品";
  const price = document.createElement("span");
  price.className = "community-price";
  price.textContent = "?? 币";
  author.append(avatar, name, badge);
  top.append(author, price);

  const body = document.createElement("span");
  body.className = "community-body";
  const icon = document.createElement("span");
  icon.className = "community-emoji";
  icon.textContent = "?";
  const copy = document.createElement("span");
  copy.className = "community-copy";
  const title = document.createElement("strong");
  title.className = "community-name";
  title.textContent = "██████";
  const desc = document.createElement("span");
  desc.className = "community-desc";
  desc.textContent = "████ ██████ ███ ████。";
  copy.append(title, desc);
  body.append(icon, copy);

  const bottom = document.createElement("span");
  bottom.className = "community-card-bottom";
  const redacted = document.createElement("span");
  redacted.textContent = "已打码";
  const note = document.createElement("span");
  note.className = "community-royalty";
  note.textContent = "不参与售卖";
  bottom.append(redacted, note);

  card.append(top, body, bottom);
  return card;
}

function makeCommunitySamples() {
  const fragment = document.createDocumentFragment();
  const note = document.createElement("p");
  note.className = "community-sample-note";
  note.textContent = "货架还空着。先放 4 件打码样品；写下第一件，就会替换它们。";
  fragment.append(note);
  ["#ffe45c", "#c9d2ff", "#ffc5b2", "#b9e7cd"].forEach((color) => {
    fragment.append(makeMaskedCommunitySample(color));
  });
  return fragment;
}

function renderCommunity(newId = null) {
  if (!el.communityGrid) {
    return;
  }

  const items = getCommunityProducts();
  const previousScroll = el.communityGrid.scrollLeft;
  if (items.length === 0) {
    el.communityGrid.classList.add("is-samples");
    el.communityGrid.replaceChildren(makeCommunitySamples());
    el.communityGrid.scrollLeft = 0;
    el.communityCount.textContent = "0";
    updateCommunityFeed();
    return;
  }

  el.communityGrid.classList.remove("is-samples");

  const fragment = document.createDocumentFragment();
  items.forEach((product) => {
    const isOwn = state.userProducts.some((entry) => entry.id === product.id);
    fragment.appendChild(makeCommunityCard(product, isOwn, newId));
  });

  el.communityGrid.replaceChildren(fragment);
  el.communityGrid.scrollLeft = newId ? 0 : previousScroll;
  el.communityCount.textContent = String(items.length);
  updateCommunityFeed();

  if (newId) {
    window.setTimeout(() => {
      const node = el.communityGrid.querySelector(`[data-id="${newId}"]`);
      node?.classList.remove("is-new");
    }, 950);
  }
}

function showCommunityProduct(product) {
  if (!product) {
    return;
  }
  if (state.pendingId) {
    showToast("先把这张小票复制入库。", 3000);
    el.receiptWrap.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  renderProduct(product, { mode: "community", print: true });
  if (window.matchMedia("(max-width: 930px)").matches) {
    el.receiptWrap.scrollIntoView({ behavior: "smooth", block: "center" });
  }
}

/* ---------- submission form ---------- */

const PRICE_TIERS = [3.3, 6.6, 9.9, 12.9, 19.9];

function authorFeeFor(price) {
  return Math.max(60, roundCoins(30 + price * 0.6));
}

function setSelectedEmoji(emoji) {
  state.selectedEmoji = emoji;
  el.emojiPicker.querySelectorAll("[data-emoji]").forEach((button) => {
    const selected = button.dataset.emoji === emoji;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
}

function setSelectedPrice(value) {
  const normalized = roundCoins(value);
  const price = PRICE_TIERS.includes(normalized) ? normalized : 9.9;
  el.itemPrice.value = price.toFixed(1);
  if (el.priceTiers) {
    el.priceTiers.querySelectorAll("[data-price]").forEach((button) => {
      const selected = roundCoins(button.dataset.price) === price;
      button.classList.toggle("is-selected", selected);
      button.setAttribute("aria-checked", String(selected));
    });
  }
  updateFeePreview();
}

function updateFeePreview() {
  const price = roundCoins(el.itemPrice.value);
  const fee = Number.isFinite(price) && price > 0 ? authorFeeFor(price) : 60;
  el.formFee.textContent = `+${formatCoins(fee)} 币`;
}

function setSubmitError(message) {
  el.formError.textContent = message || "";
}

function resetSubmitForm() {
  el.submitForm.reset();
  state.selectedEmoji = "🫧";
  setSelectedEmoji("🫧");
  setSelectedPrice(9.9);
  el.itemAuthor.value = state.nickname || "";
  setSubmitError("");
  el.submitFormView.hidden = false;
  el.submitSuccessView.hidden = true;
  state.isSubmitting = false;
  if (el.submitDialog) {
    el.submitDialog.setAttribute("aria-labelledby", "submitDialogTitle");
    el.submitDialog.scrollTop = 0;
  }
}

function syncDialogLock() {
  const hasOpenDialog = Boolean(document.querySelector("dialog[open]"));
  document.body.classList.toggle("has-dialog", hasOpenDialog);
}

function openSubmitDialog() {
  if (!el.submitDialog) {
    return;
  }

  ensureFreshDay();
  updateWalletUi();
  if (!el.submitSuccessView.hidden) {
    resetSubmitForm();
  }
  if (!el.itemAuthor.value) {
    el.itemAuthor.value = state.nickname || "";
  }
  el.submitFormView.hidden = false;
  el.submitSuccessView.hidden = true;
  el.submitDialog.setAttribute("aria-labelledby", "submitDialogTitle");
  updateFeePreview();

  document.body.classList.add("has-dialog");
  if (!el.submitDialog.open) {
    el.submitDialog.showModal();
  }

  window.requestAnimationFrame(() => {
    el.itemName.focus();
  });
}

function closeSubmitDialog() {
  if (el.submitDialog?.open) {
    el.submitDialog.close();
  }
}

function showSubmitSuccess(product, fee, royalty) {
  el.successEmoji.textContent = product.emoji;
  el.successName.textContent = product.name;
  el.successAuthor.textContent = `@${product.author} · 共创货架`;
  el.successPrice.textContent = `${product.price} 币`;
  el.successFee.textContent = `+${formatCoins(fee)} 币`;
  el.successRoyalty.textContent = `+${formatCoins(royalty)} 币`;
  el.successTotal.textContent = `+${formatCoins(fee + royalty)} 币`;
  el.submitFormView.hidden = true;
  el.submitSuccessView.hidden = false;
  el.submitDialog.setAttribute("aria-labelledby", "submitSuccessTitle");
  el.submitDialog.scrollTop = 0;
  state.isSubmitting = false;

  window.requestAnimationFrame(() => {
    el.writeAnother.focus();
  });
}

function submitProduct(event) {
  event.preventDefault();
  ensureFreshDay();
  setSubmitError("");

  const name = el.itemName.value.trim();
  const desc = el.itemDesc.value.trim();
  const side = el.itemSide.value.trim();
  const author = el.itemAuthor.value.trim().slice(0, 12) || "匿名住客";
  const tag = el.itemTag.value || "住客投稿";
  const price = Number(el.itemPrice.value);
  const emoji = state.selectedEmoji || "✨";

  if (name.length < 2) {
    setSubmitError("商品名至少写 2 个字，太短了容易被黑洞吞掉。");
    el.itemName.focus();
    return;
  }
  if (desc.length < 4) {
    setSubmitError("卖点至少写 4 个字，不然顾客不知道它有什么用。");
    el.itemDesc.focus();
    return;
  }
  if (!Number.isFinite(price) || !PRICE_TIERS.includes(roundCoins(price))) {
    setSubmitError("售价请选一个固定档位。");
    el.priceTiers?.querySelector("[aria-checked='true']")?.focus();
    return;
  }
  if (state.isSubmitting) {
    return;
  }

  state.isSubmitting = true;
  const normalizedPrice = roundCoins(price);
  const fee = authorFeeFor(normalizedPrice);
  const royalty = Math.max(1, roundCoins(normalizedPrice * ROYALTY_RATE));
  const color = PRODUCT_COLORS[Math.floor(Math.random() * PRODUCT_COLORS.length)];
  const product = {
    id: `user-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    emoji,
    name,
    en: "COMMUNITY GOODS",
    tag,
    desc,
    effect: `让「${name}」在需要的时候，发挥一点不讲道理的作用。`,
    side: side || "用久了会开始相信，离谱的东西也有它的道理。",
    crowd: `需要一点${tag}的人，以及刚好路过本店的你。`,
    review: `“${desc}” —— @${author}，住客自评。`,
    price: normalizedPrice.toFixed(1),
    unit: "宇宙币",
    color,
    stars: Math.round((4.5 + Math.random() * 0.5) * 10) / 10,
    rare: false,
    community: true,
    author,
    sales: 1,
    earnings: royalty,
    createdAt: Date.now(),
  };

  state.userProducts.unshift(product);
  state.nickname = author;
  state.lastSale = {
    name: product.name,
    revenue: royalty,
    author,
    at: Date.now(),
  };

  creditCoins(fee + royalty);
  renderProduct(product, { mode: "community", print: true });
  renderCommunity(product.id);
  updateStats();
  persistState();
  showSubmitSuccess(product, fee, royalty);
  playRevealSound(false);
  window.setTimeout(playCoinSound, 220);
}

/* ---------- drawing ---------- */

function pickProduct() {
  const rare = Math.random() < RARE_CHANCE;
  if (rare) {
    const filtered = RARE_PRODUCTS.filter((product) => !state.current || product.id !== state.current.id);
    const pool = filtered.length > 0 ? filtered : RARE_PRODUCTS;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  const community = getCommunityProducts();
  if (community.length > 0 && Math.random() < COMMUNITY_DRAW_CHANCE) {
    const filtered = community.filter((product) => !state.current || product.id !== state.current.id);
    const pool = filtered.length > 0 ? filtered : community;
    return pool[Math.floor(Math.random() * pool.length)];
  }

  const filtered = PRODUCTS.filter((product) => !state.current || product.id !== state.current.id);
  const pool = filtered.length > 0 ? filtered : PRODUCTS;
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
  const vaultFull = state.collection.length >= state.capacity;
  const pending = Boolean(state.pendingId);
  el.drawLabel.textContent = isDrawing
    ? "正在补货…"
    : pending
      ? "先复制小票 · 入仓"
      : vaultFull
        ? "仓库已满 · 先腾位置"
        : state.stock <= 0
          ? `补货 8 件 · ${formatCoins(RESTOCK_COST)} 币`
          : state.collection.length === 0
            ? "拉一下 · 补货"
            : "再拉一下 · 补货";
}

function restockMachine() {
  if (state.isDrawing) {
    return;
  }

  if (state.collection.length >= state.capacity) {
    showToast("仓库满了，先移除一件或扩容，再花钱补货。", 3600);
    return;
  }

  if (state.wallet + 0.001 < RESTOCK_COST) {
    showToast(
      `补货要 ${formatCoins(RESTOCK_COST)} 币，还差 ${formatCoins(RESTOCK_COST - state.wallet)}。签到或投稿赚一点。`,
      3600,
    );
    return;
  }

  spendCoins(RESTOCK_COST);
  state.stock = MACHINE_STOCK;
  updateWalletUi();
  updateStats();
  setDrawingUi(false);
  persistState();
  playCoinSound();
  showToast(`补货完成：${MACHINE_STOCK} 件新货，−${formatCoins(RESTOCK_COST)} 币。`, 3200);
}

function drawProduct() {
  if (state.isDrawing) {
    return;
  }

  ensureFreshDay();
  updateWalletUi();

  if (state.pendingId) {
    showToast("这张小票还没复制入库，先点「复制小票并入仓」。", 4200);
    el.receiptWrap.scrollIntoView({ behavior: "smooth", block: "center" });
    return;
  }

  if (state.collection.length >= state.capacity) {
    const overflow = state.collection.length - state.capacity;
    showToast(
      overflow > 0
        ? `仓库超出容量（${state.collection.length}/${state.capacity}），先移除 ${overflow} 件再补货。`
        : `仓库满了（${state.collection.length}/${state.capacity}）。先移除一件，或点「扩容」加格子。`,
      4200,
    );
    if (window.matchMedia("(max-width: 930px)").matches) {
      el.vault.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    return;
  }

  if (state.stock <= 0) {
    restockMachine();
    return;
  }

  ensureAudio();
  playLeverSound();
  setDrawingUi(true);

  const freeDraw = state.wallet + 0.001 < DRAW_COST;
  if (!freeDraw) {
    spendCoins(DRAW_COST);
  }

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const delay = reducedMotion ? 260 : 690;

  window.setTimeout(() => {
    try {
      const product = pickProduct();
      state.todayCount += 1;
      state.stock = Math.max(0, state.stock - 1);
      const alreadyOwned = state.collection.includes(product.id);
      let duplicateCredit = 0;
      let isNew = false;

      if (alreadyOwned) {
        duplicateCredit = sellDuplicate(product);
      } else {
        state.pendingId = product.id;
        isNew = true;
      }

      renderProduct(product, {
        mode: "draw",
        print: true,
        sticker: alreadyOwned ? "重复款 · 已寄售" : "待入库 · 复制小票",
      });
      const sale = maybeRunCommunitySale();
      renderVault();
      updateWalletUi();
      persistState();
      burstConfetti(Boolean(product.rare));
      playRevealSound(Boolean(product.rare));

      const messages = [];
      if (product.rare) {
        messages.push(`隐藏款出现：${product.name}。店长睁开了一只眼。`);
      }
      if (duplicateCredit > 0) {
        messages.push(`重复款自动寄售，+${formatCoins(duplicateCredit)} 宇宙币。`);
      }
      if (sale) {
        messages.push(`你的《${sale.product.name}》被买走，分成 +${formatCoins(sale.revenue)} 币。`);
      }
      if (isNew) {
        messages.push("新品已出票，复制小票后才会入库。");
      }
      if (messages.length > 0) {
        showToast(messages.join(" "), 3600);
      }
      if (isNew) {
        window.setTimeout(() => {
          el.copyButton.scrollIntoView({
            behavior: reducedMotion ? "auto" : "smooth",
            block: "center",
          });
        }, 220);
      }
    } finally {
      setDrawingUi(false);
    }
  }, delay);
}

/* ---------- actions ---------- */

function buildReceiptText(product = state.current) {
  if (!product) {
    return "";
  }

  const total = ALL_PRODUCTS.length;
  const officialFound = state.codex.length;
  const byline = product.community
    ? `住客投稿 · @${product.author || "匿名住客"}`
    : product.en;
  return [
    "【黑洞便利店 · 宇宙第 404 号分店】",
    `${product.emoji} ${product.name} / ${byline}`,
    `“${product.desc}”`,
    "",
    `功效：${product.effect}`,
    `副作用：${product.side}`,
    `适用人群：${product.crowd}`,
    `售价：${product.price} ${product.unit || "宇宙币"}`,
    `今日已拆：${state.todayCount} 件 · 库存：${state.stock}/${MACHINE_STOCK} 件 · 图鉴：${officialFound}/${total} · 仓库：${state.collection.length} 件`,
    `我的宇宙币：${formatCoins(state.wallet)}`,
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

function claimPendingProduct() {
  const product = state.pendingId ? findProduct(state.pendingId) : null;
  if (!product) {
    state.pendingId = null;
    updateClaimUi();
    return false;
  }

  if (state.collection.length >= state.capacity) {
    showToast("仓库满了，先移除一件或扩容，再复制小票入库。", 3600);
    return false;
  }

  state.pendingId = null;
  const isNew = collectProduct(product);
  addToCodex(product);
  addToCommunityCodex(product);
  renderVault(isNew ? product.id : null);
  updateWalletUi();
  updateClaimUi();
  setDrawingUi(false);
  persistState();

  if (state.current && state.current.id === product.id) {
    el.receiptSticker.textContent = "已入库 · 欢迎回来";
  }
  showToast(`《${product.name}》已入库。`, 2800);
  return true;
}

async function copyReceipt() {
  const pendingProduct = state.pendingId ? findProduct(state.pendingId) : null;
  const claimed = pendingProduct ? claimPendingProduct() : false;
  const text = buildReceiptText(pendingProduct || state.current);

  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      showToast(claimed ? "小票已复制，好物已入库。" : "小票已复制，记得贴在冰箱上。");
      return;
    }
  } catch (error) {
    /* Fall through to the legacy copy path. */
  }

  if (fallbackCopy(text)) {
    showToast(claimed ? "小票已复制，好物已入库。" : "小票已复制，记得贴在冰箱上。");
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

function settleConfirm(value) {
  const resolve = confirmResolver;
  confirmResolver = null;
  if (el.confirmDialog && el.confirmDialog.open) {
    el.confirmDialog.close();
  }
  if (resolve) {
    resolve(value);
  }
}

function askConfirm({ title, message, acceptLabel = "确定", cancelLabel = "取消" }) {
  if (!el.confirmDialog || typeof el.confirmDialog.showModal !== "function") {
    return Promise.resolve(window.confirm(message));
  }

  if (confirmResolver) {
    settleConfirm(false);
  }
  confirmReturnFocus = document.activeElement;
  el.confirmTitle.textContent = title;
  el.confirmMessage.textContent = message;
  el.confirmAccept.textContent = acceptLabel;
  el.confirmCancel.textContent = cancelLabel;
  document.body.classList.add("has-dialog");
  if (!el.confirmDialog.open) {
    el.confirmDialog.showModal();
  }
  window.requestAnimationFrame(() => el.confirmCancel.focus({ preventScroll: true }));
  return new Promise((resolve) => {
    confirmResolver = resolve;
  });
}

async function clearVault() {
  if (state.collection.length === 0) {
    return;
  }

  const confirmed = await askConfirm({
    title: "清空仓库？",
    message: "仓库里的好物会全部消失，但猫店长不会。",
    acceptLabel: "全部清空",
    cancelLabel: "先留着",
  });
  if (!confirmed) {
    return;
  }

  state.collection = [];
  state.current = dailyProduct();
  state.isRare = Boolean(state.current.rare);
  state.mode = "daily";
  renderProduct(state.current, { mode: "daily" });
  renderVault();
  updateWalletUi();
  persistState();
  showToast("仓库清空了，但黑洞记得你来过。");
}

function expandVault() {
  const upgrade = nextCapacityUpgrade();
  if (!upgrade) {
    showToast("仓库已经扩到最大 16 件了。");
    return;
  }

  if (state.wallet + 0.001 < upgrade.cost) {
    showToast(
      `还差 ${formatCoins(upgrade.cost - state.wallet)} 宇宙币。签到或投稿赚一点再来。`,
      3500,
    );
    return;
  }

  spendCoins(upgrade.cost);
  state.capacity = upgrade.target;
  updateWalletUi();
  renderVault();
  persistState();
  playCoinSound();
  showToast(`仓库扩容到 ${upgrade.target} 件，−${upgrade.cost} 币。`, 3000);
}

async function removeVaultItem(id) {
  const product = findProduct(id);
  if (!product || !state.collection.includes(id)) {
    return;
  }

  const official = PRODUCT_MAP.has(product.id);
  const confirmed = await askConfirm({
    title: "移除这件好物？",
    message: `《${product.name}》会从仓库消失${official ? "，图鉴进度也会少一件" : ""}。`,
    acceptLabel: "移除",
    cancelLabel: "先留着",
  });
  if (!confirmed) {
    return;
  }

  state.collection = state.collection.filter((itemId) => itemId !== id);
  if (state.current && state.current.id === id) {
    const nextProduct = state.collection.length > 0 ? findProduct(state.collection[0]) : null;
    state.current = nextProduct || dailyProduct();
    state.isRare = Boolean(state.current.rare);
    state.mode = nextProduct ? "restore" : "daily";
    renderProduct(state.current, { mode: state.mode, print: false });
  }

  renderVault();
  updateWalletUi();
  persistState();
  showToast(`《${product.name}》已从仓库移除。`, 3000);
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
  if (state.pendingId) {
    showToast("先把这张小票复制入库。", 3000);
    el.receiptWrap.scrollIntoView({ behavior: "smooth", block: "center" });
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
    syncDialogLock();
    if (!el.submitDialog.open) {
      el.copyButton.focus({ preventScroll: true });
    }
  });
  el.copyDialog.addEventListener("click", (event) => {
    if (event.target === el.copyDialog) {
      closeCopyDialog();
    }
  });

  el.confirmAccept.addEventListener("click", () => settleConfirm(true));
  el.confirmCancel.addEventListener("click", () => settleConfirm(false));
  el.closeConfirmDialog.addEventListener("click", () => settleConfirm(false));
  el.confirmDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    settleConfirm(false);
  });
  el.confirmDialog.addEventListener("click", (event) => {
    if (event.target === el.confirmDialog) {
      settleConfirm(false);
    }
  });
  el.confirmDialog.addEventListener("close", () => {
    if (confirmResolver) {
      const resolve = confirmResolver;
      confirmResolver = null;
      resolve(false);
    }
    syncDialogLock();
    if (confirmReturnFocus && confirmReturnFocus.isConnected) {
      confirmReturnFocus.focus({ preventScroll: true });
    }
    confirmReturnFocus = null;
  });

  el.openCodex.addEventListener("click", openCodexDialog);
  el.closeCodex.addEventListener("click", closeCodexDialog);
  el.codexDialog.addEventListener("cancel", (event) => {
    event.preventDefault();
    closeCodexDialog();
  });
  el.codexDialog.addEventListener("click", (event) => {
    if (event.target === el.codexDialog) {
      closeCodexDialog();
    }
  });
  el.codexDialog.addEventListener("close", () => {
    syncDialogLock();
    el.openCodex.focus({ preventScroll: true });
  });

  el.checkinButton.addEventListener("click", claimDailyBonus);
  el.openSubmit.addEventListener("click", openSubmitDialog);
  el.earnLink.addEventListener("click", openSubmitDialog);
  el.closeSubmitDialog.addEventListener("click", closeSubmitDialog);
  el.cancelSubmit.addEventListener("click", closeSubmitDialog);
  el.writeAnother.addEventListener("click", () => {
    resetSubmitForm();
    el.itemName.focus();
  });
  el.backToShelf.addEventListener("click", () => {
    closeSubmitDialog();
    window.setTimeout(() => {
      el.community.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 120);
  });
  el.submitForm.addEventListener("submit", submitProduct);
  if (el.priceTiers) {
    el.priceTiers.addEventListener("click", (event) => {
      const button = event.target.closest("[data-price]");
      if (!button) {
        return;
      }
      setSelectedPrice(button.dataset.price);
      setSubmitError("");
    });
  }
  [el.itemName, el.itemDesc].forEach((field) => {
    field.addEventListener("input", () => setSubmitError(""));
  });
  el.emojiPicker.addEventListener("click", (event) => {
    const button = event.target.closest("[data-emoji]");
    if (button) {
      setSelectedEmoji(button.dataset.emoji);
    }
  });
  el.submitDialog.addEventListener("close", () => {
    syncDialogLock();
    el.openSubmit.focus({ preventScroll: true });
  });
  el.submitDialog.addEventListener("click", (event) => {
    if (event.target === el.submitDialog) {
      closeSubmitDialog();
    }
  });

  el.soundToggle.addEventListener("click", toggleSound);
  el.shopCat.addEventListener("click", petCat);
  el.clearVault.addEventListener("click", clearVault);
  el.expandVault.addEventListener("click", expandVault);

  el.vaultGrid.addEventListener("click", (event) => {
    const remove = event.target.closest("[data-remove-id]");
    if (remove) {
      event.stopPropagation();
      removeVaultItem(remove.dataset.removeId);
      return;
    }

    const item = event.target.closest(".vault-item");
    if (!item) {
      return;
    }
    const product = findProduct(item.dataset.id);
    if (product) {
      showCollectedProduct(product);
    }
  });

  el.communityGrid.addEventListener("click", (event) => {
    if (event.target.closest("[data-open-submit]")) {
      openSubmitDialog();
      return;
    }
    const card = event.target.closest(".community-card");
    if (!card || card.classList.contains("is-masked") || !card.dataset.id) {
      return;
    }
    showCommunityProduct(findProduct(card.dataset.id));
  });

  document.addEventListener("keydown", (event) => {
    if (event.code !== "Space" || event.repeat || event.ctrlKey || event.metaKey || event.altKey) {
      return;
    }
    if (document.querySelector("dialog[open]")) {
      return;
    }
    if (event.target.closest("button, a, input, textarea, select, [contenteditable='true']")) {
      return;
    }
    event.preventDefault();
    drawProduct();
  });
}

function boot() {
  cacheElements();
  copyDialogHintMarkup = el.copyDialogHint.innerHTML;
  removeLegacyAuthCopy();
  bindAuthEvents();

  const account = getSessionAccount(ensureAuthorAccount());
  if (!account) {
    clearSession();
    showAuthGate();
    window.setTimeout(() => {
      document.body.classList.add("is-ready");
    }, 60);
    return;
  }

  state.account = account;
  hideAuthGate();
  loadState();
  bindEvents();
  bindAccountEvents();
  updateProfileUi();

  el.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
  el.soundLabel.textContent = state.soundOn ? "音效 开" : "音效 关";
  el.collectionTotal.textContent = String(ALL_PRODUCTS.length);

  resetSubmitForm();
  updateWalletUi();
  renderCommunity();
  renderProduct(state.current, { mode: state.mode });
  renderVault();
  updateStats();

  if (state.pendingId) {
    el.drawLabel.textContent = "先复制小票 · 入仓";
  } else if (state.collection.length >= state.capacity) {
    el.drawLabel.textContent = "仓库已满 · 先腾位置";
  } else if (state.stock <= 0) {
    el.drawLabel.textContent = `补货 8 件 · ${formatCoins(RESTOCK_COST)} 币`;
  } else if (state.collection.length === 0) {
    el.drawLabel.textContent = "拉一下 · 补货";
  } else {
    el.drawLabel.textContent = "再拉一下 · 补货";
  }

  window.setTimeout(() => {
    document.body.classList.add("is-ready");
  }, 60);

  window.setTimeout(() => {
    showToast(`住客 @${state.account.username}，欢迎回来。`);
  }, 700);
}

boot();

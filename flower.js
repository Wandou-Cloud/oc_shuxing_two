// ========= 完整百花谱数据（124种）=========
const flowersData = [
{ id: "001", name: "凌霄花", period: "5-9月", scentRaw: "无明显香气，枝叶清新", meaningRaw: "志存高远 · 倔强成长 · 母爱的光辉（亦被隐喻为依附他人之象征）", quote: "正面：贾昌期“披云似有凌云志，向日宁无捧日心。” 负面：舒婷“我如果爱你——绝不像攀缘的凌霄花，借你的高枝炫耀自己。”" },
{ id: "002", name: "牡丹", period: "4-5月", scentRaw: "不张扬，却有一缕稳而艳的气场。香气层层递进，初闻轻柔花脂，中调略带甘苦，尾调暖绵如膏。", meaningRaw: "富贵•繁荣•美好人生•大方而成熟的爱 👉被祝福的人生状态。", quote: "唯有牡丹真国色，花开时节动京城。——刘禹锡" },
{ id: "003", name: "玫瑰", period: "5-6月", scentRaw: "甜香袭人，馥郁芬芳", meaningRaw: "热恋，真挚爱情", quote: "玫瑰是美的，但更美的是它包含的香味。——莎士比亚" },
{ id: "004", name: "兰花", period: "3-5月", scentRaw: "其香性之清醇，香韵之馥郁，香气之悠远，香味之愉快，芳兰，广集群芳之馥郁．博采众花之英灵，赢得了“国香”、“天下第一香”等美称。", meaningRaw: "高洁典雅·品格高尚·幸福向你飞来 ·纯洁与祝福·稳重与成功", quote: "芝兰生于深林，不以无人而不芳。——《孔子家语》" },
{ id: "005", name: "梅花", period: "冬春1-3月", scentRaw: "冷冽幽香", meaningRaw: "坚忍不拔（在艰难环境中不屈不挠、坚守自我、努力成长） 高洁·报“春”（在一片死寂中带来生机与希望）·忠贞不渝", quote: "宝剑锋从磨砺出，梅花香自苦寒来。——警世贤文" },
{ id: "006", name: "菊花", period: "9-11月", scentRaw: "清淡的草本香或微苦清香", meaningRaw: "高洁、坚韧、淡泊名利 长寿与健康 真诚的祝福", quote: "采菊东篱下，悠然见南山。——陶渊明" },
{ id: "007", name: "荷花", period: "6-9月", scentRaw: "清香远溢，濯清涟而不妖", meaningRaw: "清白（不受外界污染）·纯洁（人的内心状态） 坚贞·信仰（对某种理念或宗教的虔诚）·忠贞", quote: "出淤泥而不染，濯清涟而不妖。——周敦颐" },
{ id: "008", name: "桂花", period: "9-10月", scentRaw: "甜香浓郁，十里飘香", meaningRaw: "吉祥·成就•温柔•隐而不显的美·高洁 👉不张扬，却让人忘不了的存在", quote: "桂子月中落，天香云外飘。——宋之问" },
{ id: "009", name: "山茶花", period: "冬春", scentRaw: "无香或淡香", meaningRaw: "克制·魅力·理想主义·谨慎·谦让 👉“断头君子”，你怎敢轻视我的爱", quote: "惟有山茶偏耐久，绿丛又放数枝红。——陆游" },
{ id: "010", name: "杜鹃花", period: "盛夏", scentRaw: "青草甜香，甜度克制不腻，像被晨雾稀释过的花香，轻盈通透。", meaningRaw: "幸福永驻·热情奔放·思乡浓愁 👉毒性（致幻），我为你燃烧整个春天", quote: "栀子比众木，人间诚未多。——杜甫" },
{ id: "011", name: "水仙花", period: "1-3月", scentRaw: "清幽甜香", meaningRaw: "自尊·自爱·自负·重生", quote: "凌波仙子生尘袜，水上轻盈步微月。——黄庭坚" },
{ id: "012", name: "茉莉花", period: "5-8月", scentRaw: "浓郁甜香，沁人心脾", meaningRaw: "纯洁、质朴、亲切", quote: "他年我若修花史，列作人间第一香。——许景迂" },
{ id: "013", name: "栀子花", period: "5-8月", scentRaw: "淡雅清香、沁心悠长", meaningRaw: "梦想成真·永恒约定·纯真·初恋👉你是我藏在微风里的欢喜。", quote: "栀子比众木，人间诚未多。——杜甫" },
{ id: "014", name: "海棠花", period: "4-5月", scentRaw: "淡香、清幽", meaningRaw: "温和•美丽•离愁•苦恋👉只恐夜深花睡去，故烧高烛照红妆。", quote: "只恐夜深花睡去，故烧高烛照红妆。——苏轼" },
{ id: "015", name: "樱花", period: "3-4月", scentRaw: "清淡微香", meaningRaw: "生命•热烈•纯洁•高尚•转瞬即逝的美好👉樱花落尽春将困，秋千架下归时。", quote: "樱花红陌上，杨柳绿池边。——李商隐" },
{ id: "016", name: "桃花", period: "3-4月", scentRaw: "清甜淡香", meaningRaw: "爱情•幸运•包容•美好生活👉桃李不言，下自成蹊。", quote: "桃之夭夭，灼灼其华。——《诗经》" },
{ id: "017", name: "杏花", period: "3-4月", scentRaw: "清甜幽香", meaningRaw: "少女的慕情•娇羞•疑惑•春意👉沾衣欲湿杏花雨，吹面不寒杨柳风。", quote: "春色满园关不住，一枝红杏出墙来。——叶绍翁" },
{ id: "018", name: "梨花", period: "3-4月", scentRaw: "清雅淡香", meaningRaw: "纯情•纯真的爱•永不分离👉梨花淡白柳深青，柳絮飞时花满城。", quote: "忽如一夜春风来，千树万树梨花开。——岑参" },
{ id: "019", name: "李花", period: "3-4月", scentRaw: "微香、清新", meaningRaw: "纯洁•质朴•小清新👉李花怒放一树白。", quote: "春国送暖百花开，迎春绽金它先来。" },
{ id: "020", name: "石榴花", period: "5-6月", scentRaw: "淡香", meaningRaw: "成熟的美丽•富贵•子孙满堂👉榴花初染火般红，果实挂枝如灯笼。", quote: "五月榴花照眼明，枝间时见子初成。——朱熹" },
{ id: "021", name: "紫藤", period: "4-5月", scentRaw: "浓郁甜香", meaningRaw: "沉迷的爱•执着•幸福时刻👉紫藤挂云木，花蔓宜阳春。", quote: "紫藤挂云木，花蔓宜阳春。——李白" },
{ id: "022", name: "木槿", period: "6-9月", scentRaw: "淡香", meaningRaw: "温柔的坚持•永恒的美丽•坚韧👉朝开暮落，日日绚烂。", quote: "有女同车，颜如舜华。——《诗经》" },
{ id: "023", name: "蜀葵", period: "6-8月", scentRaw: "几乎无香", meaningRaw: "梦•温和•坚持•勇敢👉一丈红妆照眼明。", quote: "箭竹蜀葵相映红，小园初夏意无穷。" },
{ id: "024", name: "鸢尾花", period: "4-5月", scentRaw: "淡香", meaningRaw: "光明•自由•力量•爱的使者👉蓝色妖姬飞舞，是人间的温柔信使。", quote: "彩虹是大地的信使，鸢尾是人间的彩虹。" },
{ id: "025", name: "百合花", period: "5-8月", scentRaw: "浓郁清香", meaningRaw: "纯洁•庄严•百年好合•高贵👉百事合意，一生顺遂。", quote: "堂前种山丹，错落玛瑙盘。——苏轼" },
{ id: "026", name: "郁金香", period: "3-5月", scentRaw: "淡香", meaningRaw: "博爱•体贴•高雅•富贵•永恒的祝福👉你是我藏在心底的温柔。", quote: "郁金香所过之处，皆是温柔与浪漫。" },
{ id: "027", name: "风信子", period: "3-4月", scentRaw: "浓香", meaningRaw: "只要点燃生命之火，便可同享丰盛人生👉重生的爱，坚定的陪伴。", quote: "风信子开，春风自来。" },
{ id: "028", name: "薰衣草", period: "6-8月", scentRaw: "清新安神、幽香", meaningRaw: "等待爱情•忧郁•浪漫•纯洁👉等待是最长情的告白。", quote: "薰衣草的花语是等待爱情。" },
{ id: "029", name: "迷迭香", period: "11-4月", scentRaw: "清凉辛香", meaningRaw: "回忆•纪念•忠贞•留住过往👉你是我不愿忘记的回忆。", quote: "迷迭香是为了帮助回忆，亲爱的，请你牢记。——莎士比亚" },
{ id: "030", name: "紫罗兰", period: "4-5月", scentRaw: "浓郁甜香", meaningRaw: "永恒的美与爱•质朴•美德•盛夏的清凉👉美而不艳，温柔自持。", quote: "一抹紫罗蓝，温柔了岁月。" },
{ id: "031", name: "虞美人", period: "4-6月", scentRaw: "极淡香", meaningRaw: "生离死别•悲歌•安慰•妩媚👉花开似蝶，凄美动人。", quote: "君王意气尽，贱妾何聊生。" },
{ id: "032", name: "彼岸花", period: "9-10月", scentRaw: "轻微异味", meaningRaw: "分离•伤心•死亡之美•永不相见👉花开一千年，花落一千年，花叶永不相见。", quote: "彼岸花，开彼岸，只见花，不见叶。" },
{ id: "033", name: "昙花", period: "6-10月", scentRaw: "清香", meaningRaw: "刹那的美丽•一瞬间永恒•珍惜👉昙花一现，只为韦陀。", quote: "昙花一现，只为倾心之人绽放。" },
{ id: "034", name: "牵牛花", period: "6-10月", scentRaw: "淡香", meaningRaw: "永恒的爱•冷静•虚幻的恋爱👉清晨绽放，向阳而生。", quote: "青青园中葵，朝露待日晞。" },
{ id: "035", name: "向日葵", period: "7-9月", scentRaw: "淡香", meaningRaw: "沉默的爱•忠诚•阳光•勇敢追求幸福👉心若向阳，无畏悲伤。", quote: "更无柳絮因风起，惟有葵花向日倾。——司马光" },
{ id: "036", name: "木棉", period: "2-3月", scentRaw: "淡香", meaningRaw: "英雄本色•蓬勃生机•珍惜眼前人👉开时热烈，落时干脆。", quote: "粤江二月三月来，千树万树朱华开。" },
{ id: "037", name: "合欢花", period: "6-7月", scentRaw: "淡香", meaningRaw: "永远恩爱•夫妻好合•两两相对👉合欢花开，岁岁年年。", quote: "夜合花开香满庭，夜深微雨醉初醒。——窦叔向" },
{ id: "038", name: "丁香花", period: "4-5月", scentRaw: "浓香", meaningRaw: "忧愁•思念•初恋•光辉👉丁香空结雨中愁。", quote: "青鸟不传云外信，丁香空结雨中愁。——李璟" },
{ id: "039", name: "金银花", period: "5-10月", scentRaw: "清香", meaningRaw: "全心全意把爱奉献给你•真爱👉一花双色，不离不弃。", quote: "金银花，金银满屋，福禄双全。" },
{ id: "040", name: "玉兰花", period: "2-3月", scentRaw: "清香", meaningRaw: "高洁•芬芳•纯洁的爱•真挚👉冰清玉洁，亭亭玉立。", quote: "翠条多力引风长，点破银花玉雪香。——睦石" },
{ id: "041", name: "绣球花", period: "6-8月", scentRaw: "几乎无香", meaningRaw: "希望•忠贞•永恒•团聚•美满👉花团锦簇，圆满幸福。", quote: "绣球春晚欲生寒，满树玲珑雪未干。——张新" },
{ id: "042", name: "芍药", period: "4-5月", scentRaw: "清香", meaningRaw: "情有所钟•惜别•美丽动人👉自古芍药喻相思。", quote: "维士与女，伊其相谑，赠之以芍药。——《诗经》" },
{ id: "043", name: "瑞香", period: "1-3月", scentRaw: "浓香", meaningRaw: "吉祥•祥瑞•吉利👉瑞香花开，祥瑞自来。", quote: "玲珑紫玉挂香枝，春意阑珊瑞香肥。" },
{ id: "044", name: "含笑", period: "3-5月", scentRaw: "香蕉甜香", meaningRaw: "矜持•含蓄•美丽•庄重👉花开半含，笑而不语。", quote: "花开不张口，含笑又低头。" },
{ id: "045", name: "迎春花", period: "2-4月", scentRaw: "淡香", meaningRaw: "相爱到永远•希望•坚强👉迎春花开，春天即来。", quote: "迎得春来非自足，百花千卉共芬芳。——韩琦" },
{ id: "046", name: "连翘", period: "3-4月", scentRaw: "淡香", meaningRaw: "预料•魔法•永恒•春天的气息👉满枝金黄，点亮春光。", quote: "连翘花开金灿灿，报春使者不畏寒。" },
{ id: "047", name: "棣棠", period: "4-6月", scentRaw: "淡香", meaningRaw: "高雅•尊贵•财富👉金枝玉叶，温柔富贵。", quote: "棣棠花开满枝金，春风拂面暖人心。" },
{ id: "048", name: "金雀花", period: "4-5月", scentRaw: "淡香", meaningRaw: "幽雅•整洁•谦逊👉花似金雀，翩翩起舞。", quote: "金雀花开春意闹，轻盈灵动似飞鸟。" },
{ id: "049", name: "腊梅", period: "12-3月", scentRaw: "浓香、冷香", meaningRaw: "坚强•傲骨•独立•坚毅👉凌寒独自开。", quote: "墙角数枝梅，凌寒独自开。——王安石" },
{ id: "050", name: "茶梅", period: "10-4月", scentRaw: "淡香", meaningRaw: "理想的爱•谦让•清雅👉花中雅致，不争不抢。", quote: "茶梅傲雪开，清雅自芬芳。" },
{ id: "051", name: "三角梅", period: "11-6月", scentRaw: "无香", meaningRaw: "热情•坚韧不拔•顽强奋进👉花开热烈，四季不败。", quote: "三角梅开，热烈而自由。" },
{ id: "052", name: "龙船花", period: "3-12月", scentRaw: "淡香", meaningRaw: "争先恐后•健康•吉祥👉花开似火，节节向上。", quote: "龙船花开红似火，吉祥如意幸福多。" },
{ id: "053", name: "凤凰木", period: "5-7月", scentRaw: "淡香", meaningRaw: "离别•思念•火热青春👉花开如焰，青春热烈。", quote: "凤凰花开，离别与重逢。" },
{ id: "054", name: "蓝花楹", period: "5-6月", scentRaw: "淡香", meaningRaw: "宁静•深远•忧郁•在绝望中等待爱情👉紫雾漫天，温柔浪漫。", quote: "蓝花楹开，便是人间温柔。" },
{ id: "055", name: "鸡蛋花", period: "5-10月", scentRaw: "清香", meaningRaw: "孕育希望•复活•新生•平凡的爱👉简单纯粹，温暖治愈。", quote: "鸡蛋花开，朴素而淡雅。" },
{ id: "056", name: "使君子", period: "5-10月", scentRaw: "傍晚变浓香", meaningRaw: "健康•守护•圆满👉花蔓缠绕，温柔守护。", quote: "使君子花开，香满庭院。" },
{ id: "057", name: "九里香", period: "4-8月", scentRaw: "极香、悠远", meaningRaw: "爱情的俘虏•勇敢•坚定👉香飘九里，一见倾心。", quote: "九里香飘远，清风入梦来。" },
{ id: "058", name: "米兰", period: "5-12月", scentRaw: "浓香", meaningRaw: "有爱•生命就会开花•热情👉米粒小花，香气袭人。", quote: "米兰花开细碎金，清香阵阵满庭深。" },
{ id: "059", name: "白兰花", period: "4-9月", scentRaw: "浓香", meaningRaw: "纯洁的爱•真挚•高贵👉洁白芬芳，清雅脱俗。", quote: "白兰花，清雅脱俗，香远益清。" },
{ id: "060", name: "夜来香", period: "5-8月", scentRaw: "夜间极浓", meaningRaw: "危险的快乐•神秘•诱惑👉黑夜绽放，暗香浮动。", quote: "夜来香，只在夜里为你绽放。" },
{ id: "061", name: "晚香玉", period: "7-11月", scentRaw: "浓香", meaningRaw: "危险的快乐•倾心•温柔👉月下美人，暗香袭人。", quote: "晚香玉开，月下独醉。" },
{ id: "062", name: "姜花", period: "7-8月", scentRaw: "清香", meaningRaw: "将记忆永远留在夏天•淳朴•信赖👉洁白似蝶，清爽宜人。", quote: "野姜花开，夏日清凉。" },
{ id: "063", name: "美人蕉", period: "6-10月", scentRaw: "无香", meaningRaw: "坚实的未来•多福多寿•坚持👉热烈坚强，向阳而生。", quote: "芭蕉叶叶为多情，一叶才舒一叶生。" },
{ id: "064", name: "大丽花", period: "6-12月", scentRaw: "淡香", meaningRaw: "大方•雍容•富贵•毅力👉花开富贵，大吉大利。", quote: "大丽花开，富丽堂皇。" },
{ id: "065", name: "百日草", period: "6-10月", scentRaw: "淡香", meaningRaw: "想念远方朋友•天长地久•步步高升👉花期长久，友谊长存。", quote: "百日花开百日红，步步高升运亨通。" },
{ id: "066", name: "万寿菊", period: "7-9月", scentRaw: "特殊辛香", meaningRaw: "健康•长寿•友情•甜蜜爱情👉福寿安康，吉祥如意。", quote: "万寿菊开，福寿绵长。" },
{ id: "067", name: "金盏菊", period: "4-9月", scentRaw: "淡香", meaningRaw: "离别•迷恋•守护•悲伤👉守护之花，温柔陪伴。", quote: "金盏花开，阳光满怀。" },
{ id: "068", name: "矢车菊", period: "4-5月", scentRaw: "淡香", meaningRaw: "遇见•幸福•纤细•优雅👉遇见便是幸福。", quote: "矢车菊，遇见幸福。" },
{ id: "069", name: "雏菊", period: "3-6月、9-10月", scentRaw: "淡香", meaningRaw: "天真•和平•希望•纯洁的美•深藏在心底的爱👉暗恋与纯真。", quote: "雏菊，藏在心底的爱。" },
{ id: "070", name: "波斯菊", period: "6-8月", scentRaw: "淡香", meaningRaw: "少女的真心•纯情•自由•快乐👉自由热烈，烂漫天真。", quote: "波斯菊开，随风摇曳。" },
{ id: "071", name: "翠菊", period: "7-10月", scentRaw: "淡香", meaningRaw: "担心你的爱•请相信我•追想•可靠的爱情👉坚定可靠，为爱守候。", quote: "翠菊花开，思念满怀。" },
{ id: "072", name: "麦秆菊", period: "7-9月", scentRaw: "无香", meaningRaw: "永恒的记忆•铭记在心👉花开不败，记忆长存。", quote: "麦秆菊，永不凋谢的花。" },
{ id: "073", name: "千日红", period: "6-10月", scentRaw: "无香", meaningRaw: "永恒的爱•不朽•圆满👉花谢不凋，情意长久。", quote: "千日红，红红火火，长长久久。" },
{ id: "074", name: "鸡冠花", period: "7-10月", scentRaw: "无香", meaningRaw: "真爱永恒•痴情•倔强•独立👉昂首挺立，热烈赤诚。", quote: "鸡冠花开，昂首挺立。" },
{ id: "075", name: "凤仙花", period: "6-8月", scentRaw: "淡香", meaningRaw: "别碰我•怀念过去•野性美👉灵动可爱，温柔倔强。", quote: "金凤花开色最鲜，佳人染得指头丹。" },
{ id: "076", name: "倒挂金钟", period: "4-12月", scentRaw: "淡香", meaningRaw: "相信爱情•热烈的心•祝福👉花似灯笼，温暖人心。", quote: "倒挂金钟开，灯笼映楼台。" },
{ id: "077", name: "天竺葵", period: "5-7月", scentRaw: "特殊香气", meaningRaw: "幸福•就在你身边•真诚的爱👉陪伴是最长情的告白。", quote: "天竺葵开，幸福常在。" },
{ id: "078", name: "矮牵牛", period: "4-10月", scentRaw: "无香", meaningRaw: "安全感•与你同心•温馨👉平凡温暖，安心陪伴。", quote: "矮牵牛，安心与你同行。" },
{ id: "079", name: "石竹", period: "5-9月", scentRaw: "淡香", meaningRaw: "纯洁的爱•才能•大胆•女性美👉坚韧温柔，清雅动人。", quote: "石竹花开，清雅自芬芳。" },
{ id: "080", name: "康乃馨", period: "5-8月", scentRaw: "清香", meaningRaw: "母爱•热情•真情•温馨的祝福👉献给母亲的爱。", quote: "母爱如山，康乃馨如诗。" },
{ id: "081", name: "洋桔梗", period: "5-7月", scentRaw: "淡香", meaningRaw: "真诚不变的爱•纯洁•无邪•美丽👉温柔纯粹，一往情深。", quote: "洋桔梗，花如其名，温柔浪漫。" },
{ id: "082", name: "飞燕草", period: "5-7月", scentRaw: "淡香", meaningRaw: "清静•正义•自由•轻盈👉如燕飞舞，自由洒脱。", quote: "飞燕花开，轻盈自在。" },
{ id: "083", name: "风铃草", period: "5-6月", scentRaw: "淡香", meaningRaw: "感谢•温柔的爱•来自远方的祝福👉风一吹，铃儿响。", quote: "风铃草摇，思念来到。" },
{ id: "084", name: "勿忘我", period: "4-5月", scentRaw: "淡香", meaningRaw: "永恒的爱•浓情厚谊•永不变的心👉请不要忘记我。", quote: "勿忘我，勿忘你，生生世世在一起。" },
{ id: "085", name: "满天星", period: "6-8月", scentRaw: "淡香", meaningRaw: "甘愿做配角•思念•青春•梦境👉甘愿做你生命里的背景。", quote: "满天星辰，不及你眼底温柔。" },
{ id: "086", name: "情人草", period: "4-6月", scentRaw: "淡香", meaningRaw: "完美爱情•暗恋•钟情👉一见倾心，再见倾情。", quote: "情人草，随风起舞，为你心动。" },
{ id: "087", name: "补血草", period: "5-10月", scentRaw: "无香", meaningRaw: "永恒的爱•永远铭记•深情👉花开长久，爱意不变。", quote: "补血草，不凋的爱。" },
{ id: "088", name: "鼠尾草", period: "6-9月", scentRaw: "清凉淡香", meaningRaw: "家庭和睦•热烈•思念👉温暖治愈，守护家园。", quote: "鼠尾草，治愈心灵的芬芳。" },
{ id: "089", name: "马鞭草", period: "6-8月", scentRaw: "淡香", meaningRaw: "正义•期待•纯真•同心协力👉坚韧向上，光明磊落。", quote: "马鞭草开，坚韧不拔。" },
{ id: "090", name: "百里香", period: "6-7月", scentRaw: "清香", meaningRaw: "勇气•高贵•善良•吉祥👉勇气之花，所向披靡。", quote: "百里香，赠予勇敢之人。" },
{ id: "091", name: "罗勒", period: "7-9月", scentRaw: "辛香", meaningRaw: "协助•积极•合作•生命力👉芬芳相伴，活力满满。", quote: "罗勒，生命力与芬芳同在。" },
{ id: "092", name: "薄荷", period: "7-8月", scentRaw: "清凉辛香", meaningRaw: "愿与你再次相逢•再爱我一次•美德👉清凉治愈，沁人心脾。", quote: "薄荷微凉，治愈忧伤。" },
{ id: "093", name: "香蜂草", period: "6-8月", scentRaw: "柠檬清香", meaningRaw: "关怀•善待自己•治愈👉治愈心灵，温暖如初。", quote: "香蜂草，治愈一切不开心。" },
{ id: "094", name: "柠檬草", period: "8-10月", scentRaw: "柠檬清香", meaningRaw: "开不了口的爱•率真•阳光👉清新阳光，坦率真诚。", quote: "柠檬草，清新自然，阳光满怀。" },
{ id: "095", name: "茉莉", period: "5-8月", scentRaw: "浓香", meaningRaw: "忠贞•尊敬•清纯•贞洁•质朴👉花开茉莉，芬芳满庭。", quote: "他年我若修花史，列作人间第一香。——江奎" },
{ id: "096", name: "白兰", period: "4-9月", scentRaw: "浓香", meaningRaw: "纯洁的爱•真挚•高贵👉洁白芬芳，清雅脱俗。", quote: "白兰花，清雅脱俗，香远益清。" },
{ id: "097", name: "缅栀", period: "5-10月", scentRaw: "清香", meaningRaw: "孕育希望•新生•平凡的爱👉简单纯粹，温暖治愈。", quote: "缅栀花开，朴素淡雅。" },
{ id: "098", name: "刺桐", period: "2-3月", scentRaw: "淡香", meaningRaw: "坚贞•不屈•红红火火👉花开红艳，坚韧不拔。", quote: "刺桐花开满树红，热情似火映晴空。" },
{ id: "099", name: "象牙红", period: "5-10月", scentRaw: "淡香", meaningRaw: "荣耀•热烈•赤诚•坚守👉热烈绽放，赤诚向上。", quote: "珊瑚簇簇映朱栏，艳吐象牙红欲燃。" },
{ id: "100", name: "火炬花", period: "6-10月", scentRaw: "无香", meaningRaw: "热情•光明•勇往直前•好运👉点燃希望，照亮前路。", quote: "火炬花开燃似火，一腔热血向骄阳。" },
{ id: "101", name: "鹤望兰", period: "全年", scentRaw: "无香", meaningRaw: "自由•幸福•思念•潇洒人生👉飞向自由，拥抱幸福。", quote: "鹤望兰开，如鸟高飞，自在人间。" },
{ id: "102", name: "天堂鸟", period: "全年", scentRaw: "无香", meaningRaw: "自由•吉祥•热烈•等待👉为爱等待，向光而行。", quote: "天堂鸟，是人间的自由与浪漫。" },
{ id: "103", name: "龟背竹", period: "8-9月", scentRaw: "淡香", meaningRaw: "健康•长寿•稳固•吉祥👉福寿安康，安稳长久。", quote: "龟背叶阔纳千祥，绿意安然福寿长。" },
{ id: "104", name: "蔓绿绒", period: "极少开花", scentRaw: "无香", meaningRaw: "温暖•包容•生机•守护👉绿意常在，温柔守护。", quote: "蔓绿绒生翠影长，一室清宁岁月香。" },
{ id: "105", name: "琴叶榕", period: "6-7月", scentRaw: "淡香", meaningRaw: "和谐•稳重•吉祥•艺术人生👉端庄雅致，平安顺遂。", quote: "琴叶舒展迎清风，一树安然伴时光。" },
{ id: "106", name: "结香", period: "3-4月", scentRaw: "浓香", meaningRaw: "喜结连理•好运•思念•圆满👉打结寄情，所愿皆成。", quote: "结香花开枝打结，一梦相思到天涯。" },
{ id: "107", name: "木香", period: "4-5月", scentRaw: "浓郁甜香", meaningRaw: "爱情•友情•陪伴•高洁👉相伴长久，芬芳如故。", quote: "木香花满架，一香醉春风。" },
{ id: "108", name: "荼蘼", period: "4-5月", scentRaw: "清香", meaningRaw: "末路之美•珍惜•圆满•青春落幕👉花开到极致，温柔到最后。", quote: "开到荼蘼花事了，丝丝天棘出莓墙。——王淇" },
{ id: "109", name: "蔷薇", period: "4-9月", scentRaw: "清香", meaningRaw: "浪漫•思念•坚强•美好的爱情👉温柔坚韧，爱意绵长。", quote: "水晶帘动微风起，满架蔷薇一院香。——高骈" },
{ id: "110", name: "月季", period: "全年", scentRaw: "淡香", meaningRaw: "希望•美丽•永恒•坚韧👉四季常开，美好常在。", quote: "花落花开无间断，春来春去不相关。——苏轼" },
{ id: "111", name: "白玉棠", period: "5-6月", scentRaw: "清香", meaningRaw: "纯洁•高雅•真诚•平安👉洁白如玉，清雅脱俗。", quote: "棠花如雪满篱墙，一缕清风送暗香。" },
{ id: "112", name: "紫荆", period: "3-4月", scentRaw: "淡香", meaningRaw: "亲情•和睦•团圆•思念👉阖家欢乐，骨肉情深。", quote: "紫荆花发故园春，手足相依情意真。" },
{ id: "113", name: "风铃木", period: "3-4月", scentRaw: "淡香", meaningRaw: "感谢•温暖•新生•美好👉心怀感恩，遇见温柔。", quote: "风铃一树满金黄，春风拂过送安康。" },
{ id: "114", name: "火焰木", period: "4-5月", scentRaw: "淡香", meaningRaw: "热烈•吉祥•光明•活力👉如火绽放，生机勃勃。", quote: "火焰花开燃似霞，一树红火旺人家。" },
{ id: "115", name: "阿勃勒", period: "6-8月", scentRaw: "淡香", meaningRaw: "财富•吉祥•幸福•时光👉金雨飘落，福气满怀。", quote: "黄金雨落满庭芳，岁岁平安福寿长。" },
{ id: "116", name: "金凤花", period: "全年", scentRaw: "淡香", meaningRaw: "智慧•勇敢•吉祥•上进👉灵动飞扬，前程似锦。", quote: "金凤花开蝶自来，清风送福入楼台。" },
{ id: "117", name: "扶桑", period: "全年", scentRaw: "淡香", meaningRaw: "热情•繁荣•吉祥•清新👉花开灿烂，福气常在。", quote: "扶桑花开日日红，人间处处沐春风。" },
{ id: "118", name: "木芙蓉", period: "8-11月", scentRaw: "淡香", meaningRaw: "高洁•坚韧•吉祥•美人👉傲霜绽放，美丽端庄。", quote: "千林扫作一番黄，只有芙蓉独自芳。——苏轼" },
{ id: "119", name: "辛夷", period: "3-4月", scentRaw: "清香", meaningRaw: "高洁•理想•希望•真挚👉报春使者，心怀美好。", quote: "辛夷花尽杏花飞，始怪山禽日日来。——钱起" },
{ id: "120", name: "玉兰", period: "2-3月", scentRaw: "清香", meaningRaw: "高洁•芬芳•纯洁•吉祥👉冰清玉洁，富贵吉祥。", quote: "翠条如玉映雪香，一树花开满庭芳。" },
{ id: "121", name: "马褂木", period: "5-6月", scentRaw: "淡香", meaningRaw: "稳定•和谐•传承•美好👉安稳相伴，世代吉祥。", quote: "鹅掌青青映日长，花开清雅送安康。" },
{ id: "122", name: "紫薇", period: "6-9月", scentRaw: "淡香", meaningRaw: "好运•雄辩•女性•坚韧👉花开百日，好运连连。", quote: "独坐黄昏谁是伴，紫薇花对紫薇郎。——白居易" },
{ id: "123", name: "百日红", period: "6-9月", scentRaw: "淡香", meaningRaw: "长久•幸福•活力•吉祥👉花开百日，幸福长久。", quote: "百日花开红胜火，一生平安喜乐多。" },
{ id: "124", name: "夹竹桃", period: "全年", scentRaw: "淡香", meaningRaw: "谨慎•深刻的爱•坚韧👉美丽且坚韧，需用心珍惜。", quote: "夹竹桃开映碧流，红芳翠影自悠悠。" }
];

// 辅助函数
function removePunctuation(str) {
    if (!str) return "";
    return str.replace(/[·•、，,.;:？?！!“”‘’《》【】（）()]/g, '').trim();
}
function splitKeywords(rawText) {
    if (!rawText) return [];
    let segments = rawText.split(/[·•、，,，\\\\s👉]+/).filter(s => s.trim().length > 0);
    let cleaned = segments.map(seg => removePunctuation(seg)).filter(s => s.length > 1);
    return [...new Map(cleaned.map(item => [item, item])).values()];
}
function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/[&<>]/g, function(m) {
        if (m === '&') return '&amp;';
        if (m === '<') return '&lt;';
        if (m === '>') return '&gt;';
        return m;
    });
}
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\\\\]\\\\\\\\]/g, '\\\\\\\\$&');
}

// 花期匹配（支持季节与月份）
function normalizeSeason(periodStr) {
    let monthRanges = [];
    const rangeMatch = periodStr.match(/(\\d+)\\s*-\\s*(\\d+)/);
    if (rangeMatch) {
        let start = parseInt(rangeMatch[1]);
        let end = parseInt(rangeMatch[2]);
        monthRanges.push([start, end]);
    } else {
        const numbers = periodStr.match(/\\d+/g);
        if (numbers) {
            let nums = numbers.map(Number);
            if (nums.length === 1) monthRanges.push([nums[0], nums[0]]);
            else if (nums.length >= 2) monthRanges.push([Math.min(...nums), Math.max(...nums)]);
        }
    }
    if (monthRanges.length === 0) {
        if (periodStr.includes('春')) monthRanges.push([2,4]);
        else if (periodStr.includes('夏')) monthRanges.push([5,7]);
        else if (periodStr.includes('秋')) monthRanges.push([8,10]);
        else if (periodStr.includes('冬')) monthRanges.push([11,1]);
    }
    if (periodStr.includes('冬春') || (periodStr.includes('冬') && periodStr.includes('春'))) {
        monthRanges = [[11,1],[2,4]];
    }
    return monthRanges;
}
function matchPeriod(flower, query) {
    if (!query.trim()) return true;
    const q = query.trim().toLowerCase();
    const periodRaw = flower.period.toLowerCase();
    if (periodRaw.includes(q)) return true;
    const seasonMap = { '春': [2,3,4], '夏': [5,6,7], '秋': [8,9,10], '冬': [11,12,1] };
    for (let [season, months] of Object.entries(seasonMap)) {
        if (q.includes(season)) {
            const ranges = normalizeSeason(periodRaw);
            for (let [s,e] of ranges) {
                let checkMonths = [];
                if (s <= e) for (let m = s; m <= e; m++) checkMonths.push(m);
                else { for (let m = s; m <= 12; m++) checkMonths.push(m); for (let m = 1; m <= e; m++) checkMonths.push(m); }
                if (checkMonths.some(m => months.includes(m))) return true;
            }
        }
    }
    const numbersInQuery = q.match(/\\d+/g);
    if (numbersInQuery) {
        let queryNumbers = numbersInQuery.map(Number);
        const ranges = normalizeSeason(periodRaw);
        for (let [s,e] of ranges) {
            let flowerMonths = [];
            if (s <= e) for (let m = s; m <= e; m++) flowerMonths.push(m);
            else { for (let m = s; m <= 12; m++) flowerMonths.push(m); for (let m = 1; m <= e; m++) flowerMonths.push(m); }
            if (queryNumbers.some(qn => flowerMonths.includes(qn))) return true;
        }
    }
    return false;
}
function matchMeaningKeyword(flower, query) {
    if (!query.trim()) return true;
    const kw = query.trim().toLowerCase();
    const meaningKeywords = splitKeywords(flower.meaningRaw);
    for (let keyword of meaningKeywords) {
        let allCharsMatch = true;
        for (let ch of kw) {
            if (!keyword.includes(ch)) { allCharsMatch = false; break; }
        }
        if (allCharsMatch && kw.length > 0) return true;
        if (keyword.includes(kw)) return true;
    }
    return false;
}
function getMeaningKeywords(flower) {
    return splitKeywords(flower.meaningRaw);
}
function getHighlightedTags(flower, query) {
    const keywords = getMeaningKeywords(flower);
    if (!query.trim()) return keywords.map(kw => `<span class="flower-tag">${escapeHtml(kw)}</span>`);
    const kw = query.trim();
    return keywords.map(keyword => {
        if (keyword.includes(kw)) {
            const highlighted = keyword.replace(new RegExp(`(${escapeRegex(kw)})`, 'gi'), `<span class="highlight">$1</span>`);
            return `<span class="flower-tag">${highlighted}</span>`;
        }
        let hasAnyChar = false;
        let newKeyword = keyword;
        for (let ch of kw) {
            if (keyword.includes(ch)) {
                hasAnyChar = true;
                const chRegex = new RegExp(`(${escapeRegex(ch)})`, 'gi');
                newKeyword = newKeyword.replace(chRegex, `<span class="highlight">$1</span>`);
            }
        }
        if (hasAnyChar) return `<span class="flower-tag">${newKeyword}</span>`;
        return `<span class="flower-tag">${escapeHtml(keyword)}</span>`;
    });
}

let currentPeriodQuery = "";
let currentMeaningQuery = "";

function getFilteredFlowers() {
    return flowersData.filter(flower => {
        let periodOk = true, meaningOk = true;
        if (currentPeriodQuery.trim() !== "") periodOk = matchPeriod(flower, currentPeriodQuery);
        if (currentMeaningQuery.trim() !== "") meaningOk = matchMeaningKeyword(flower, currentMeaningQuery);
        return periodOk && meaningOk;
    });
}

function renderFlowerGrid(flowerArray) {
    const grid = document.getElementById('flowerGrid');
    if (!grid) return;
    grid.innerHTML = '';
    if (flowerArray.length === 0) {
        grid.innerHTML = `<div class="col-span-full text-center py-12 text-stone-400"><i class="fas fa-leaf text-4xl mb-2"></i><p>暂无匹配的灵花，试试其他关键词～</p></div>`;
        document.getElementById('totalCount').innerText = '0';
        return;
    }
    flowerArray.forEach(flower => {
        const card = document.createElement('div');
        card.className = 'green-card bg-white rounded-2xl p-5 shadow-sm cursor-pointer transition-all';
        let meaningPreview = '';
        if (currentMeaningQuery.trim()) {
            const tags = getHighlightedTags(flower, currentMeaningQuery);
            if (tags.length) {
                meaningPreview = `<div class="mt-2 flex flex-wrap justify-center gap-1 text-xs">${tags.slice(0,2).join('')}${tags.length>2 ? '<span class="text-green-600">…</span>' : ''}</div>`;
            }
        }
        card.innerHTML = `
            <div class="flex flex-col items-center text-center">
                <div class="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mb-3 shadow-inner border border-green-200">
                    <i class="fas fa-flower text-green-600 text-2xl"></i>
                </div>
                <h3 class="font-bold text-xl text-stone-800">${escapeHtml(flower.name)}</h3>
                <p class="text-xs text-green-600 font-mono mt-1">${flower.id}</p>
                <div class="mt-2 text-xs text-stone-400 flex items-center gap-1"><i class="far fa-calendar-alt"></i> ${flower.period}</div>
                ${meaningPreview}
            </div>
        `;
        card.addEventListener('click', (e) => {
            e.stopPropagation();
            showDetail(flower.id);
        });
        grid.appendChild(card);
    });
    document.getElementById('totalCount').innerText = flowerArray.length;
}

function refreshHome() {
    const filtered = getFilteredFlowers();
    renderFlowerGrid(filtered);
}

function showDetail(flowerId) {
    const flower = flowersData.find(f => f.id === flowerId);
    if (!flower) return;
    const scentKeywords = splitKeywords(flower.scentRaw);
    let meaningTagsHtml = '';
    if (currentMeaningQuery.trim()) {
        const highlightedTags = getHighlightedTags(flower, currentMeaningQuery);
        meaningTagsHtml = highlightedTags.join('');
    } else {
        meaningTagsHtml = splitKeywords(flower.meaningRaw).map(kw => `<span class="flower-tag">${escapeHtml(kw)}</span>`).join('');
    }
    if (!meaningTagsHtml) meaningTagsHtml = `<span class="text-stone-400 italic">——</span>`;
    const scentTagsHtml = scentKeywords.length ? scentKeywords.map(kw => `<span class="flower-tag">${escapeHtml(kw)}</span>`).join('') : `<span class="text-stone-400 italic">无香韵细分</span>`;
    let quoteHtml = escapeHtml(flower.quote);
    if (currentMeaningQuery.trim()) {
        const kw = currentMeaningQuery.trim();
        const regex = new RegExp(`(${escapeRegex(kw)})`, 'gi');
        quoteHtml = quoteHtml.replace(regex, `<span class="highlight">$1</span>`);
    }
    const detailHtml = `
        <div class="text-center mb-8">
            <div class="circle-flower">
                <span>${escapeHtml(flower.name)}</span>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div><div class="flex items-center gap-2 text-green-700 border-b border-green-200 pb-1 mb-3"><i class="fas fa-hashtag"></i><span class="font-semibold tracking-wide">灵植编码</span></div><p class="text-2xl font-mono text-stone-700">${flower.id}</p></div>
            <div><div class="flex items-center gap-2 text-green-700 border-b border-green-200 pb-1 mb-3"><i class="far fa-calendar-alt"></i><span class="font-semibold">花期 · 物候</span></div><p class="text-stone-700">${escapeHtml(flower.period)}</p></div>
        </div>
        <div class="mt-6"><div class="flex items-center gap-2 text-green-700 border-b border-green-200 pb-1 mb-3"><i class="fas fa-wind"></i><span class="font-semibold">花香 · 韵</span></div><div class="flex flex-wrap gap-2 mt-2">${scentTagsHtml}</div><p class="text-xs text-stone-400 mt-2 italic">${escapeHtml(flower.scentRaw.substring(0, 100))}${flower.scentRaw.length > 100 ? '…' : ''}</p></div>
        <div class="mt-6"><div class="flex items-center gap-2 text-green-700 border-b border-green-200 pb-1 mb-3"><i class="fas fa-comment-dots"></i><span class="font-semibold">花语 · 灵识</span></div><div class="flex flex-wrap gap-2 mt-2">${meaningTagsHtml}</div><p class="text-xs text-stone-400 mt-2">原文摘录：${escapeHtml(flower.meaningRaw.substring(0, 100))}${flower.meaningRaw.length > 100 ? '…' : ''}</p></div>
        <div class="mt-8 pt-2"><div class="flex items-center gap-2 text-green-700 border-b border-green-200 pb-1 mb-3"><i class="fas fa-quote-left"></i><span class="font-semibold">古韵 · 名句</span></div><div class="quote-text text-stone-600 bg-green-50/30 p-4 rounded-xl text-base leading-relaxed">${quoteHtml}</div></div>
    `;
    document.getElementById('detailContent').innerHTML = detailHtml;
    document.getElementById('baipu-content').classList.add('hidden');
    document.getElementById('detailView').classList.remove('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function goHome() {
    document.getElementById('baipu-content').classList.remove('hidden');
    document.getElementById('detailView').classList.add('hidden');
    refreshHome();
}

function resetSearch() {
    document.getElementById('periodSearchInput').value = '';
    document.getElementById('meaningSearchInput').value = '';
    currentPeriodQuery = '';
    currentMeaningQuery = '';
    refreshHome();
}
function applyPeriodSearch() {
    currentPeriodQuery = document.getElementById('periodSearchInput').value;
    refreshHome();
}
function applyMeaningSearch() {
    const keyword = document.getElementById('meaningSearchInput').value.trim();
    if (keyword === "") {
        currentMeaningQuery = "";
        refreshHome();
        return;
    }
    const matched = flowersData.filter(f => matchMeaningKeyword(f, keyword));
    if (matched.length === 0) {
        alert(`未找到花语包含“${keyword}”（任意字符匹配）的灵花。`);
        currentMeaningQuery = "";
        refreshHome();
        return;
    }
    currentMeaningQuery = keyword;
    if (matched.length === 1) {
        showDetail(matched[0].id);
    } else {
        refreshHome();
        alert(`找到 ${matched.length} 种花语匹配“${keyword}”的灵花，请点击花名查看详情。`);
    }
}
function exportToExcel() {
    const sheetData = [["编号", "花名", "花期", "花香", "花语", "代表古诗 / 名人名言"]];
    flowersData.forEach(f => {
        sheetData.push([f.id, f.name, f.period, f.scentRaw, f.meaningRaw, f.quote]);
    });
    const ws = XLSX.utils.aoa_to_sheet(sheetData);
    ws['!cols'] = [{wch:8},{wch:12},{wch:12},{wch:36},{wch:40},{wch:44}];
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "OC百花谱");
    XLSX.writeFile(wb, `OC百花谱_${new Date().toISOString().slice(0,19).replace(/:/g, '-')}.xlsx`);
}

export function initFlowerModule() {
    renderFlowerGrid(flowersData);
    document.getElementById('exportExcelBtn').addEventListener('click', exportToExcel);
    document.getElementById('backHomeBtn').addEventListener('click', goHome);
    document.getElementById('searchPeriodBtn').addEventListener('click', applyPeriodSearch);
    document.getElementById('searchMeaningBtn').addEventListener('click', applyMeaningSearch);
    document.getElementById('resetSearchBtn').addEventListener('click', resetSearch);
    const periodInput = document.getElementById('periodSearchInput');
    const meaningInput = document.getElementById('meaningSearchInput');
    if (periodInput) periodInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') applyPeriodSearch(); });
    if (meaningInput) meaningInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') applyMeaningSearch(); });
}

export { refreshHome };
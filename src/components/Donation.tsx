import { Show, createSignal, onMount } from 'solid-js'

interface InfoType { request_count: number, used_quota: number }

export default () => {
  const [info, setInfo] = createSignal<InfoType>({ request_count: 0, used_quota: 0 })
  const [show, setShow] = createSignal(0)

  onMount(async() => {
    getInfo()
  })

  const getInfo = async() => {
    const response = await fetch('/api/info', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
    const responseJson = await response.json()
    if (responseJson.code === 200)
      setInfo(responseJson.data)
  }

  return (
    <div class="mt-1 mb-6">
      <div onClick={() => { setShow(show() ? 0 : 1) }}>
        <p mt-1 text-sm op-60>
          <span>为了能持久运营,我们需要你的</span>
          <span class="border-1 px-2 py-1 mx-1 rounded-md transition-colors bg-slate/20 cursor-pointer hover:bg-slate/50">捐赠</span>
          <span>🙏🏻</span>
        </p>
        <Show when={show() === 1}>
          <div my-4>
            <span op-60>使用微信扫一扫</span>
            <img class="w-4/5 mt-2 max-w-[300px]" src="https://gzgptnb.oss-cn-guangzhou.aliyuncs.com/chatphp/202307/1690812533321.jpg" />
          </div>
        </Show>
        <p
          mt-2
          text-xs
          op-60
          w-full
          cursor-pointer
          class={show() === 0 ? 'line-clamp-1' : ''}
        >感谢<span class="gpt-subtitle text-xs">捐赠</span> <span gpt-subtitle text-xs>匿名x234, 撰x2, 小东西, 小東西（Fear not.）, </span>_Hxhey., 三块石头, 宣德, Ak🧸", 喂喂, 温ws, 秦晓刚, Mr.Rice, 霁煦, 凝聚力, F-, July.7.7, 咸鱼咸鱼 x2, Alaska, Lin, 絡石, Zero, 憨鱼柳, 谎言的概率论, 漩, 今天吃鸡蛋了吗, 邱天, 小木, 凌, Amireux, 寻找薛家喵, yz. Jimmy liang, Respect., 空之境界, www, 杨祎允, 如你所愿, 汪, 淼 x2, 按图索骥, 清, Rosa, NARUTO, 李易, Silk Road 낭가용, 谷沧, Lili, 江, 清和月, 疯华正貌, 伍沐, Chloe, 嘻嘻哈哈, 林欣口上的憨der, 好好吃饭, lit., 🦄, long, 小伙子, Faiz, 瓜sama, Mairn, Duan Ran, 张弛有力, 桃浪初五🥥, 红尘, 殷建城, 刘宗鑫, 阿巴阿巴, 三块石头, 遇你, 北下关, Zy, 日落公园, 仇松柏, 幽冥魔帝, 堪, 😁, Kondraki, 🌱小憨憨🌱, 大小明, AoC, Fog, Maggie, 奈斯, 明天，你好, clear sky., 。, Zhang, 🤔, 아버지。, 🌱小憨憨🌱, Ying, Sam时,刘□,LLAP, 德玛西亚, 宜家鲨鱼, 夏、, 飯, 嗯，挺好的, 阿森, sigma, 呱呱, 小浩, gaigai, 冬瓜, destiny, 沐., Fran, 。, @, 竹篱, 剑锋, tiger brother, 阿豪, 璃云月海, 张迪, 油包烤腰子, ljm, ABC., gaigai, 清风扶醉月, 周胜杰, 城酉, 翘起小手指, crystalblue, 诗人, V, 哥只是个传说, 🍊, 🌱小憨憨🌱, 冬瓜, 是桦不是花, b, 小诺, 吴紫璇, gaigai, 祥ray, Alisaran., 梦痕, 藤井树同学要好好努力, John, 我永远不死, 无念, ZTОTHEQ, ZELONG, 柯夕, TiAMO, 快乐牌刀片, 海:浪, suki, 鼓楼, Ailey-麦, 夏洪, 2775B6, 端短断, 京轩玉, gaigai, 妮~, 我会胖的, 孜然, Babe Bae, 小医僧, 0° O0o° O0。, 李常品, Manna, I'm fine!, tp, 尽北, 歲歲, TAOFIA🇼🇸, PRESIDENT, 。, 何以为安。, Antonio, 且趟春河, 登森, 李超, 叶雨星河, 褪长衫, 1, 松, 一野, 赵佳佳, 团, 吴加森, 毕业当网管, 北方有相思, ., 霜雪梦千年, 三块石头, 游子衣, 书荣, Ffffff, lz, because of u, xxp, but, 陈应天, 谁的尼克, ^Yik^Sep13🎧, 祁德鲁斯.拿雯&穆尔斯.老穆棍, gaigai, 渡笃睹渎, 刘正, 小夫, oNeDay, Nice, 文韵, 老师傅张, 白色呆毛, 錦龍站, 铿锵玫瑰, 刘之之, MK, Mr.空, 123456, 纯净水, 蓉城崽er, 。,zjh, 我永远不死, 凯, 江江, chen, 瑞瑞, 随性, 立青化学, 1900, 浮一大白, 老坛酸菜牛肉面.exe, Max, 陈建, 墨,平凡之路,三块石头,到机场几十公里,Be yourself,aha,gaigai,求您别酸,dranecrII,西元前,usable,滞涨天子,胡胡爱小杨,🍊,Llllll.,陈婷,小木,か永平,Liga,宋丹云🌏,Yao,寒士,孤者为王,梅子喂晚霞,唯物主义, xin, Joey潘,石头剪刀布, 幸运小鼠, 素, chbdhr, John, ivy, Yan., 剑戟, 麦子麦子说, Sliver, 👣, HeZIiREn_, 🤗, 花果山的秋, Ivia, Grass, HeZIiREn_, 猫猫珊, yasenjan, 鱿鱼丝,Ω Lucas, ***，***！，梧桐,  🍊, 韬, 火魔天狼, Lyra, 渐近的双曲线, Etching, 。, 巴耶克, 会飞的瘸子, lain, Tulip°, 至于春日, 柒柒~, 王居伟, 星月, 渐近的双曲线, ビール族, 落川, 大强子, 崔文婷, 眄, I'm fine!, PZ, Sun、, 捱, 咖啡配猪蹄, 曲奕迎和, 咸煌, 蛋仔, 👿, 加油吖OVO, 诗人剑客哲学家, 三石, 肥龙多, Napolenha24, 49岁的中年小伙儿, banana., Oui, 一只大憨憨, 不忘初心, 陈皮糖, 椒餅, 宜早&星辰, Malenia, J, The_official_mads, watermelon, 低乘高除以二, LC, 王奇, 泡芙夹心饼干, Lang郎, 净岛, 🪐, Mystic, 东方不摆, Cloak Cat, Jiang, 帅成狗, 枫一, 心静如水, 槍弒媘褩溫媃, 刘璇, 飞翔, 心静如水, 雨来, boom,满载明月归,Fantastic.H.,乌泱乌泱,：P,态度决定一切,Hephaistion,电光火石,Ks,Xurh,Frivolous,🦛,赵晓宁,Woody,The_official_mads,gracias,追风筝的人,Fedor：🐣,i,遇见.,Q。💭,可乐.,w,Chick想要飞,cui,暴龙战士,Lendo.,nb class,初海,夜微凉,Sasa,北忆い念影,似是浊清,H.,繁水,Null,｀Lxy, G2Y, 裴俊, broccoli, 61.x2, The_official_mads, Capybara, LIU, 😏, Cola, 海东青, 吴小步, 龙须糖先生, @77., shine, 满载明月归, 当梨花开遍了天涯, (像NooN,打不出😭),vvvhk,789,星栖阳空,悄悄,圆桌骑士,手拉手,星劫,落虾生,巫海军,麻酱下棋,付海旭,俞小燕,诩 禾,4,MC小甜甜,Lance x2,荣儿,底乘高除以二x2,Hephaistion,深山老林的老羊,苦瓜成熟时,謌剋籺蟘㥁,将挡,HighValayria,謀ing,库因克,ZaiCN,十三,半只小新,七五三,Charon,37,Yeah,博,是飞翔使罢,飞机,躲不过的躲,忠孝,騒々しいですね,静思一夏,山白水x2,羊一,尽北,will.i.am,郭峰,微凉的清晨,五饼🍕,忧郁的秋裤,🐻나속,清水煮包子,幸子小姐拜托了,老尹,Capybara,Oliver,Fluoxetine,saoirse,老麦圈,羽麟,The_official_mads,Lana,w。w,郭郭郭,Maktub,猫不爱吃鱼🐟,Lisa,勿扰,1不瘦下来不改名1,Tassel~,执剑者,来个蛋糕烘,egabrag,番茄酱蓝莓味.,😶,再熬一会就睡,wendy,幼猪乐园,V,威猛先生,Wink,至此,Slug Cat,菲小羊x5,LKJ,超爱卷毛刘修勾,The_official_mads,卓越,巴普洛夫.斯基,ww,injuiced,张帅豪,😴,吃肉的猪,Komorebi,冰原夜火,blank,我也不知道,刃x2,琬砚,单人青Camelia,Tsuki萱萱,洪阳,桀桀,D,方发群,%,3,郝兄,waterlx,Miraiowa,际缘,蘑菇,OrCrane.,6e9D9,Lisa,那些无名之辈,???,Alice,💤,luki,小伙汁,月无穷,路西法,Limbool,锖靛,using namespace ZZP,a飞儿,翻斗花园突击手汼耶耶,Zephyr,👾小黑猫👾,逆熵而殇,L中L,罗瑜,G.E.M,六疯一,尹闹闹,Provoke?,最shi人间🎵四🔸月,荣儿,羽化尘x3,阿龙,ᥫᩣ,OSIRIS,aaa,现木,ざ^梦境ㄟ旅行家,Derek#,xpy,道亦有道,房不住啊,egabrag,郭超,HT150,小路人,苏安心,Asuka,tzx,冰斓,杨枝甘露,隐阡,neko-3166z,Blur,I am (a)Mason.,黄莲微苦,TEL,Hz.....哈哈, Komorebi.,Dream_chasing BOY,T,🌟人生路遥,欢喜,liver,グCrave,I am fine!,思绪云骞,砖住,蘑菇菌,Gvelin9,心飞杨,Mustand🐴,小白白,时光清浅,Lucine,三明樣,化合物bwl,哈哈,说书人,Firefly,陈小猫🐱,是只乌鸦,HJ-blurred,初南十五,****#!,加号,二拾三,卖粉笔的黑皮,Asuka,Chuan,LLL,Chuan,六疯一,lily,半途而菲,Victoria,HJ-blurred,SfD,Slug Cat,Old six does evil,白日梦想家,羊驼,陈,Dulua,命若琴弦aliosha,Tifika非常想排练,世哲,Domingo(,grey,海东青,Tim.ding,重炮三角,2021.10.11,太空垃圾x2,扒拉拉小魔芋,浩劫余生,LKL,iiNotFound,H$,小青蛙,TT,D,大梦,192.168.0.1x2,花开富贵🌸,凌乱_,難唸的經,lll,我推研磨天下第一,顾锦,Su_XH,大饼,MBKB,Su-27,Slug Cat,蔡晨威,Z,SfD,北欢南依,云追月,曹昕宇,.,蒋文彬,H,Pacino,锦帘,rumia,步欲不諪,小狗凯,XCalico,H,神不隆東,顺风车🍃,天南地北,系雾阁,久有凌云志,星月弥天,192.168.0.1,M,Accelerator,宥季,RoR,Ss🧸,Chrissie,Y,koil,samuraidog,心碎土豆丝,灼逝年华 阿康,.,海洋,龙王,凡死了.,LKJ,会游泳的鱼,七弦万木,随便你,随便你,路西法,蒂和平,🤐,长安.,学习,燚焱川,朱沐,麦芒,Joe,Melody,狐翎,方源,🍊,Wu Qiqian,天生猴子必有用,王越泽,天气日记,我的喵.cn,暖暖,一人一,Yuang,头绿心黄大菠萝OvO,菲小羊,吕刑褶,MYBEA***ASY,学习,姜*凡,E*s,二*三,SK**小明,Li**He,我被**包围了,你你你,雷,太阳保安,达不溜,Fe*ix,我叫孔子,neko**6z,巉巉,【那一段回忆、*】,缥缈,我在故我思,贰拾叁かい,zzzzy,Axis,腥白吆,C-c.减少期待,SD,Eurek4,哈哈,夏之星,chopsticks0253,I am fine!,菲小羊,云,乏味,玖玖Rae
        </p>
        <p mt-2 op-60 class={show() === 0 ? 'hidden' : ''} text-xs>感谢B站UP主:叫憨子吧, 木木子灵的推荐</p>

        <div mt-3 text-xs op-60 class={show() === 0 ? 'hidden' : ''}>
          <Show when={info().request_count <= 0}>
            <p>.</p>
          </Show>
          <Show when={info().request_count > 0}>
            <p>共处理{info().request_count}次,消耗{(info().used_quota / 1000).toFixed(1)}K≈${(info().used_quota / 500000).toFixed(1)} token</p>
          </Show>
        </div>

      </div>
      <Show when={show() === 1}>
        <div>

          <div mt-2 op-60>
            感谢您的支持!<br />
            发送任意内容到 <a gpt-subtitle text-sm href="mailto:free2gpt@gmail.com">free2gpt@gmail.com</a> 可订阅最新地址<br />
            联系我们: <a gpt-subtitle text-sm href="mailto:free2gpt@gmail.com">free2gpt@gmail.com</a>
          </div>

          <button onClick={() => { setShow(0) }} class="w-1/3 h-12 mt-2 px-4 py-2 bg-slate bg-op-15 hover:bg-op-20 rounded-sm">
            关闭
          </button>
        </div>
      </Show>

    </div>
  )
}

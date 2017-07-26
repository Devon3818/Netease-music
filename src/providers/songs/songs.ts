import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the SongsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class SongsProvider {

  datas = {
    "Hot":[
      {
        'img':'http://p1.music.126.net/eDufAKSriJrnR3X51vBclA==/109951162981585955.jpg?param=140y140',
        'name':'【综艺】中餐厅背景音乐BGM合集',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/soyb49Z7BXkQ3gpj-TqW9g==/109951162979302271.jpg?param=140y140',
        'name':'吴越魂° | 千古江南，醉里吴音',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/RnOZHM0BNxXuy-RwQQI5BA==/3313928048221849.jpg?param=140y140',
        'name':'【节奏控】那些超带感的音乐（典藏版）',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/oKSDghwBInul_yH67ZgemQ==/19179880835185465.jpg?param=140y140',
        'name':'我为什么要拼命爬出底层社会？',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/mQy3lRj6YJ0TW3fM9v85YA==/6643249256145165.jpg?param=140y140',
        'name':'那些只听前奏就中毒的英文歌',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/M6B8hMGJz3DoTJU0oucUDg==/19157890602628763.jpg?param=140y140',
        'name':'唐僧肉为什么要蒸着吃？',
        'listen':'103万'
      }
    ],
    "Chinese":[
      {
        'img':'http://p1.music.126.net/tUBJmAWjoq_7r312SZkIlg==/109951162978430843.jpg?param=140y140',
        'name':'随遇而安 | 云村民谣旅行指南',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/u_ZIP8uXBaTwU8zQRjunuQ==/109951162983882490.jpg?param=140y140',
        'name':'七月份的尾巴|原来你是狮子座！',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/soyb49Z7BXkQ3gpj-TqW9g==/109951162979302271.jpg?param=140y140',
        'name':'吴越魂° | 千古江南，醉里吴音',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/DHz_TsF0FyNg4xKq7Scxcw==/18727981557905579.jpg?param=140y140',
        'name':'还记得当年的那张录取通知书吗？',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/Ija1lf3pciYB_qzm5DzUxg==/109951162983981059.jpg?param=140y140',
        'name':'【劲歌金曲第一弹】请选择严肃脸抖腿',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/0ZCqzSaW2ZLGI47tiAuKmg==/18992963858451539.jpg?param=140y140',
        'name':'【 天堂中的歌声丨那些英年早逝的歌手们 〗',
        'listen':'103万'
      }
    ],
    "Popular":[
      {
        'img':'http://p1.music.126.net/26OG2Ulv8j7jfHOoJSc39g==/19038043835199519.jpg?param=140y140',
        'name':'意想不到的合作碰撞出激情的火花',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/pKEkwRSkce9o8O11ftd5TQ==/19175482788674978.jpg?param=140y140',
        'name':'2017音乐录影带大奖提名名单(VMA)',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/FnDqZTsZxiXbBxqfMv51DQ==/109951162979203771.jpg?param=140y140',
        'name':'当Funk遇上K-Pop，腿要抖的带点范儿',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/u_ZIP8uXBaTwU8zQRjunuQ==/109951162983882490.jpg?param=140y140',
        'name':'一到夏天我就喜欢吃着火锅哼着歌',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/GmaEcUSYiHglQWejKRUlFQ==/18686200116033517.jpg?param=140y140',
        'name':'粤语味道|一如火焰，一如倒影',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/feWX-kN6QD4Z-3kpn779vw==/109951162974250332.jpg?param=140y140',
        'name':'日系の恋歌| 你是我未曾说出口的爱恋ღ',
        'listen':'103万'
      }
    ],
    "Rock":[
      {
        'img':'http://p1.music.126.net/y7-v0kt-jAjbGXIkxzVKMg==/18733479116000349.jpg?param=140y140',
        'name':'『日摇』温柔少年的清新夏夜',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/NNJ630tJvfpSvhWRcUrCqQ==/18646617697473646.jpg?param=140y140',
        'name':'林肯公园主唱离世,努力过 但终究徒劳',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/xclyhewFYP6zsk32bW2PRw==/18619129906757046.jpg?param=140y140',
        'name':'妈妈我不想做公主，我想抱着吉他唱歌',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/Pg_7T9Bk4EoNBZEoSnWj6w==/18592741627655609.jpg?param=140y140',
        'name':'［年代感］欧美原声吉他弹唱精选100首',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/B6nH1fPNzeBFZsUETp2vow==/19098516974711044.jpg?param=140y140',
        'name':'简史‖民谣少女与摇滚有个约会',
        'listen':'103万'
      },
      {
        'img':'http://p1.music.126.net/bPecpRCgUHSbG9YdABZwxw==/18632324046256183.jpg?param=140y140',
        'name':'跟随旧时光中的节奏摇摆起来',
        'listen':'103万'
      }
    ]
  };

  music = {
    'title':'林肯公园主唱离世,努力过 但终究徒劳',
    'banner':'http://p3.music.126.net/NNJ630tJvfpSvhWRcUrCqQ==/18646617697473646.jpg?param=200y200',
    'user_img':'http://p1.music.126.net/CAbI4IY6L-Q27b9Lvnmz_A==/18587244069304411.jpg?param=40y40',
    'user_name':'welphenEDM',
    'songs':[
      {
        'name':'Numb','dec':'Numb','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'In The End','dec':'In The End','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'Leave Out All The Rest (Single Version)','dec':'Leave Out All The Rest (Single Version)','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'New Divide - (变形金刚2主题曲)','dec':'New Divide','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'Numb Encore','dec':'Look Out For Detox','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'Good Goodbye','dec':'One More Light','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'Numb','dec':'Numb','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'In The End','dec':'In The End','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'Leave Out All The Rest (Single Version)','dec':'Leave Out All The Rest (Single Version)','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'New Divide - (变形金刚2主题曲)','dec':'New Divide','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'Numb Encore','dec':'Look Out For Detox','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'Good Goodbye','dec':'One More Light','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'Numb','dec':'Numb','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'In The End','dec':'In The End','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'Leave Out All The Rest (Single Version)','dec':'Leave Out All The Rest (Single Version)','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'New Divide - (变形金刚2主题曲)','dec':'New Divide','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'Numb Encore','dec':'Look Out For Detox','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      },
      {
        'name':'Good Goodbye','dec':'One More Light','mp3':'http://m10.music.126.net/20170726222800/9e60bc00843253831c1c7c75830c6004/ymusic/f875/16f4/b467/7690393025329da8447626be05d3130b.mp3'
      }
    ]
  };

  radio = {
    Hot:[
      {
        'title':'第二季 - 你知道松鼠桂鱼名字的来由吗？',
        'img':'http://p1.music.126.net/MS97p2nwS3d6Wjd6lVXvnA==/1396379778174456.jpg?param=40x40',
        'dec':'围炉夜话'
      },
      {
        'title':'十二星座的睡前故事',
        'img':'http://p1.music.126.net/pAMQmz3BG9jhnOyyztZGjw==/18633423557852484.jpg?param=40x40',
        'dec':'伦敦华语电台'
      },
      {
        'title':'精益创业：创业像开车一样简单？',
        'img':'http://p1.music.126.net/tSCxyjyYFnqA8beBPw_sTQ==/19090820393266546.jpg?param=40x40',
        'dec':'老马商书房'
      }
    ],
    Story:[
      {
        'title':'林非的唱片私藏馆',
        'img':'http://p1.music.126.net/S9t4DhG1Xhu_7gvs80pIGA==/18984167765431940.jpg?param=200y200',
        'dec':'DJ林非跟你分享他的两万张老唱片'
      },
      {
        'title':'文茜的异想世界',
        'img':'http://p1.music.126.net/8mrb6zhmrohmRBvpGBKf3Q==/18762066418273062.jpg?param=200y200',
        'dec':'文茜的异想世界'
      },
      {
        'title':'艳秋电台',
        'img':'http://p1.music.126.net/n9Q6xCFO_mtyVaOZ0FQgkg==/1365593487663277.jpg?param=200y200',
        'dec':'这个治愈的声音得听'
      }
    ],
    Reading:[
      {
        'title':'疼哥深夜电台',
        'img':'http://p1.music.126.net/9_1xFNKRuj0lrvnN8spUZg==/18612532836930965.jpg?param=200y200',
        'dec':'读有趣的书，做有点儿酷的人'
      },
      {
        'title':'边江de恋声馆',
        'img':'http://p1.music.126.net/yxPVKhnPau3Y81d85QoyfA==/18557557255384267.jpg?param=200y200',
        'dec':'配音演员边江静静地读给你听'
      },
      {
        'title':'孟京辉戏剧工作室 | 为你读诗',
        'img':'http://p1.music.126.net/_cLLY3ktFjIW6REMc-PdPg==/3426078273674073.jpg?param=200y200',
        'dec':'听孟京辉戏剧工作室为你读诗'
      }
    ],
    Talk:[
      {
        'title':'DJ林非 非常有笑果',
        'img':'http://p1.music.126.net/KuqMlVxrK640EMg7eJtisg==/19200771556089129.jpg?param=200y200',
        'dec':'DJ林非和你讲讲段子逗逗乐'
      },
      {
        'title':'徐老师讲故事',
        'img':'http://p1.music.126.net/wrDD4J9vAlQ4X4iGZlZw9A==/18878614648928302.jpg?param=200y200',
        'dec':'英雄联盟中的情仇故事'
      },
      {
        'title':'蔡骏的悬疑世界',
        'img':'http://p1.music.126.net/K2Hw83TaPqSkgimDp_PuwA==/18495984603865929.jpg?param=200y200',
        'dec':'作家蔡骏的网易云电台'
      }
    ],
    Emotional:[
      {
        'title':'陪你·说一世晚安',
        'img':'http://p1.music.126.net/4ySjXIJzpv-6edi_3hz6zg==/18582846022726200.jpg?param=200y200',
        'dec':'一个吃货的深夜独白'
      },
      {
        'title':'夜听',
        'img':'http://p1.music.126.net/x6lw6XTZhViVL5I4j_zj7A==/18568552371730335.jpg?param=200y200',
        'dec':'晚上十点，向你问好'
      },
      {
        'title':'酒鬼一家跳票电台',
        'img':'http://p1.music.126.net/7ebzpIIMakXOoAfHMw92zQ==/19205169602369194.jpg?param=200y200',
        'dec':'国民老岳父公的暖心故事'
      }
    ],
    Creation:[
      {
        'title':'猫小梦的gamefun',
        'img':'http://p1.music.126.net/p6kCB8bYqXuI4LxbsqIxEA==/19113910137364418.jpg?param=200y200',
        'dec':'人气主播猫小梦的翻唱作品'
      },
      {
        'title':'隐姓埋名的花日天',
        'img':'http://p1.music.126.net/BP60N7dkYnTIfHFnPIOKSg==/3315027563349819.jpg?param=200y200',
        'dec':'花粥正经翻唱不耍流氓'
      },
      {
        'title':'nG家的猫',
        'img':'http://p1.music.126.net/3p3_z5oR7QuNhq4ZCdkEgg==/18705991324767857.jpg?param=200y200',
        'dec':'正能量摄影师nG唱歌也好听'
      }
    ],
    History:[
      {
        'title':'围炉夜话',
        'img':'http://p1.music.126.net/MS97p2nwS3d6Wjd6lVXvnA==/1396379778174456.jpg?param=200y200',
        'dec':'美食家陈立带你品美食、说历史'
      },
      {
        'title':'而我想…成为一个有趣的妞',
        'img':'http://p1.music.126.net/SojydYaYbTVJOLSrjKHJsw==/18740076185614730.jpg?param=200y200',
        'dec':'F小姐的读书观影笔记'
      },
      {
        'title':'你好，中文系',
        'img':'http://p1.music.126.net/EJHQL2246G_2NmYwGKZ4zA==/19201871067547683.jpg?param=200y200',
        'dec':'全宇宙文学都在这里了'
      }
    ]
  }

  constructor() {
    
  }

}

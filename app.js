const root=document.documentElement;
const themeButton=document.getElementById('themeButton');
const menuButton=document.querySelector('.menu-toggle');
const nav=document.getElementById('mainnav');

function applyTheme(theme){
  root.dataset.theme=theme;
  localStorage.setItem('wx-theme',theme);
  themeButton.textContent=theme==='dark'?'☀':'◐';
  themeButton.title=theme==='dark'?'Switch to light theme':'Switch to dark theme';
}
const savedTheme=localStorage.getItem('wx-theme');
const prefersDark=window.matchMedia&&window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(savedTheme||(prefersDark?'dark':'light'));
themeButton.addEventListener('click',()=>applyTheme(root.dataset.theme==='dark'?'light':'dark'));
menuButton?.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded',String(open));
});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded','false');
}));

const publications=[
  {
    year:2026,
    title:'Comparison of methods for dividing earlywood and latewood based on tree-ring density',
    original:'基于树轮密度的早晚材划分方法比较',
    authors:'M. Chen, <strong>W. Xiang</strong>, T. Liu, D. Xu, Z. Pei',
    venue:'<em>Journal of Beijing Forestry University</em>, 48(5), 169–179',
    url:'https://doi.org/10.12171/j.1000-1522.20250269',
    label:'DOI',tags:'growth climate methods dendro'
  },
  {
    year:2025,
    title:'Estimation methods of dominant height in natural Picea schrenkiana forests',
    original:'天山云杉天然林优势高估计方法',
    authors:'Y. Feng, M. Zhou, G. Luo, F. Xu, R. Tao, <strong>W. Xiang</strong>',
    venue:'<em>Journal of Beijing Forestry University</em>, 47(12), 48–55',
    url:'https://doi.org/10.12171/j.1000-1522.20250299',
    label:'DOI',tags:'growth management methods'
  },
  {
    year:2025,
    title:'Response of early and late wood growth of main coniferous species to multiple factors in spruce-fir coniferous mixed forest',
    original:'云冷杉针叶混交林主要针叶树种早晚材生长对多因子的响应',
    authors:'J. Gao, X. Ma, G. Luo, Z. Wang, Y. Li, <strong>W. Xiang</strong>',
    venue:'<em>Journal of Central South University of Forestry & Technology</em>, 45(10), 16–27',
    url:'https://doi.org/10.14067/j.cnki.1673-923x.2025.10.002',
    label:'DOI',tags:'growth climate dendro'
  },
  {
    year:2025,
    title:'Response of radial growth of Abies nephrolepis to environmental factors in Changbai Mountain',
    original:'长白山臭冷杉径向生长对环境因子的响应',
    authors:'Q. Wang, Z. Wang, T. Liu, W. Xu, <strong>W. Xiang</strong>',
    venue:'<em>Journal of Central South University of Forestry & Technology</em>, 45(11), 55–65',
    url:'https://doi.org/10.14067/j.cnki.1673-923x.2025.11.006',
    label:'DOI',tags:'growth climate dendro'
  },
  {
    year:2025,
    title:'Lightweight YOLOv11 tree species recognition method based on bark texture',
    original:'基于树皮纹理的轻量化YOLOv11树种识别方法',
    authors:'Z. Zhang, <strong>W. Xiang</strong>, Z. Liu, J. Wang, M. Zhang, J. Yang, Z. Huang',
    venue:'<em>Journal of Beijing Forestry University</em>, 47(8), 134–148',
    url:'https://doi.org/10.12171/j.1000-1522.20250151',
    label:'DOI',tags:'methods remote'
  },
  {
    year:2025,
    title:'Carbon sink potential of natural Picea schrenkiana forests under different site classes',
    original:'基于不同立地等级的天山云杉天然林碳汇潜力',
    authors:'Z. Wang, G. Luo, S. Zhao, X. Ma, Y. Aikebaierjiang, <strong>W. Xiang</strong>',
    venue:'<em>Journal of Beijing Forestry University</em>, 47(4), 74–81',
    url:'https://doi.org/10.12171/j.1000-1522.20240337',
    label:'DOI',tags:'growth management carbon'
  },
  {
    year:2025,
    title:'Site quality evaluation of Larix olgensis plantations based on potential productivity in Jilin Province of northeastern China',
    original:'基于潜在生产力的吉林省长白落叶松人工林立地质量评价',
    authors:'G. Luo, X. Lei, J. Shi, X. He, <strong>W. Xiang</strong>, Y. Li',
    venue:'<em>Journal of Beijing Forestry University</em>, 47(1), 1–10',
    url:'https://doi.org/10.12171/j.1000-1522.20240173',
    label:'DOI',tags:'growth management methods'
  },
  {
    year:2025,
    title:'Calculation methods of the dominant height in natural spruce-fir mixed-conifer forests',
    original:'天然云冷杉针叶混交林优势高计算方法探究',
    authors:'R. Tao, <strong>W. Xiang</strong>, M. Zhou, Y. Feng, F. Xu, Z. Ni',
    venue:'<em>Forest Research</em>, 38(3), 60–71',
    url:'https://doi.org/10.12403/j.1001-1498.20240308',
    label:'DOI',tags:'growth management methods'
  },
  {
    year:2025,
    title:'Dynamic changes in tree carbon growth after thinning in a mixed larch-spruce-fir forest',
    original:'落叶松云冷杉针叶混交林间伐后林木碳生长动态变化',
    authors:'T. Liu, G. Luo, J. Lu, C. Li, H. Zhu, <strong>W. Xiang</strong>',
    venue:'<em>Forest Research</em>, 38(2), 12–22',
    url:'https://caf.irtree.com/articles/article_detail.aspx?id=c5123708cf5f439eaf52b5bdd701edc0',
    label:'View',tags:'growth management carbon'
  },
  {
    year:2024,
    title:'Spatial pattern analysis of saplings of dominant tree species in a spruce-fir mixed conifer-broadleaved forest based on Ripley’s L function',
    original:'基于Ripley L函数的云冷杉针阔混交林优势树种幼树的空间格局分析',
    authors:'F. Xu, H. Sun, J. Shi, D. He, F. Wang, <strong>W. Xiang</strong>',
    venue:'<em>Journal of Beijing Forestry University</em>, 46(10), 1–10',
    url:'https://doi.org/10.12171/j.1000-1522.20230237',
    label:'DOI',tags:'regeneration management methods'
  },
  {
    year:2024,
    title:'Comparison of methods for dividing developmental stages of natural mixed forest stands',
    original:'天然混交林林分发育阶段划分方法的比较',
    authors:'D. Xu, F. Xu, H. Sun, M. Chen, <strong>W. Xiang</strong>',
    venue:'<em>Journal of Beijing Forestry University</em>, 46(7), 139–152',
    url:'https://cjournal.hep.com.cn/1000-1522/CN/1160127121785020946',
    label:'View',tags:'growth management methods'
  },
  {
    year:2024,
    title:'Contribution rate of climate factors to radial growth of main coniferous species in a spruce-fir conifer mixed forest of northeastern China',
    original:'气候因子对云冷杉针叶混交林主要针叶树种径向生长的贡献率分析',
    authors:'Z. Yi, J. Li, H. Sun, M. Chen, S. Li, <strong>W. Xiang</strong>',
    venue:'<em>Journal of Beijing Forestry University</em>, 46(5), 55–63',
    url:'https://j.bjfu.edu.cn/cn/article/Y2024/I5/55',
    label:'View',tags:'growth climate dendro'
  },
  {
    year:2023,
    title:'Fusing tree-ring and permanent sample plot data to model influences of climate and thinning on tree growth in larch plantations in northeast China',
    original:'',
    authors:'J. Shi, F. Xu, <strong>W. Xiang</strong>',
    venue:'<em>Forest Ecology and Management</em>, 531, 120800',
    url:'https://doi.org/10.1016/j.foreco.2023.120800',
    label:'DOI',tags:'growth climate management dendro'
  },
  {
    year:2023,
    title:'Height-diameter model for Picea schrenkiana in Xinjiang based on Bayesian methods',
    original:'基于贝叶斯法的新疆天山云杉树高-胸径模型研究',
    authors:'X. Deng, F. Xu, S. Zhao, <strong>W. Xiang</strong>',
    venue:'<em>Journal of Beijing Forestry University</em>, 45(1), 11–20',
    url:'https://opaj.napstic.cn/periodicalArticle/0120230205812073',
    label:'View',tags:'growth methods'
  },
  {
    year:2023,
    title:'Effects of gap size on regeneration of saplings in Picea schrenkiana forests in Xinjiang, northwestern China',
    original:'林隙大小对天山云杉幼树更新的影响',
    authors:'R. An, F. Xu, X. Deng, S. Zhao, <strong>W. Xiang</strong>',
    venue:'<em>Journal of Beijing Forestry University</em>, 45(11), 23–32',
    url:'https://j.bjfu.edu.cn/cn/article/2023/11',
    label:'View',tags:'regeneration management'
  },
  {
    year:2022,
    title:'Does climate play a more important role than competition in modeling height to crown base of Larix principis-rupprechtii in northern China?',
    original:'',
    authors:'J. Shi, X. Liu, <strong>W. Xiang</strong>',
    venue:'<em>Forest Ecology and Management</em>, 526, 120564',
    url:'https://doi.org/10.1016/j.foreco.2022.120564',
    label:'DOI',tags:'growth climate methods'
  },
  {
    year:2020,
    title:'Long-term tree and stand growth dynamics after thinning of various intensities in a temperate mixed forest',
    original:'',
    authors:'G. Moreau, D. Auty, D. Pothier, J. Shi, J. Lu, A. Achim, <strong>W. Xiang</strong>',
    venue:'<em>Forest Ecology and Management</em>, 473, 118311',
    url:'https://doi.org/10.1016/j.foreco.2020.118311',
    label:'DOI',tags:'growth management'
  },
  {
    year:2020,
    title:'Application of concept mapping in the teaching of Forest Management: a case study at Beijing Forestry University',
    original:'“概念图”教学法在“森林经理学”课程教学中的应用——以北京林业大学为例',
    authors:'<strong>W. Xiang</strong>, Z. Huang, J. Li',
    venue:'<em>Forestry Education in China</em>, 38(2), 48–52',
    url:'https://fec.bjfu.edu.cn/article/id/10095',
    label:'View',tags:'teaching'
  },
  {
    year:2019,
    title:'MtreeRing: An R package with graphical user interface for automatic measurement of tree ring widths using image processing techniques',
    original:'',
    authors:'J. Shi, <strong>W. Xiang</strong>, Q. Liu, S. Shah',
    venue:'<em>Dendrochronologia</em>, 58, 125644',
    url:'https://doi.org/10.1016/j.dendro.2019.125644',
    label:'DOI',tags:'methods dendro'
  },
  {
    year:2019,
    title:'Characterizing wood density–climate relationships along the stem in black spruce (Picea mariana) using a combination of boosted regression trees and mixed-effects models',
    original:'',
    authors:'<strong>W. Xiang</strong>, M. Hassegawa, T. Franceschini, M. Leitch, A. Achim',
    venue:'<em>Forestry: An International Journal of Forest Research</em>, 92(3), 357–374',
    url:'https://doi.org/10.1093/forestry/cpz006',
    label:'DOI',tags:'growth climate methods dendro'
  },
  {
    year:2019,
    title:'Development and application of a density management diagram for Pinus massoniana plantations',
    original:'马尾松人工林密度控制图及密度预警研究',
    authors:'J. Wang, Y. Lu, X. Zhao, J. Meng, <strong>W. Xiang</strong>',
    venue:'<em>Journal of Beijing Forestry University</em>, 41(5), 31–37',
    url:'https://opaj.napstic.cn/periodical/556?activeIssue=005&activeYear=2019&prePage=1',
    label:'View',tags:'growth management methods'
  },
  {
    year:2019,
    title:'Teaching reform of the comprehensive field course in Forest Management: a case study at Beijing Forestry University',
    original:'“森林经理学综合实习”课程教学改革实践——以北京林业大学为例',
    authors:'J. Meng, <strong>W. Xiang</strong>',
    venue:'<em>Forestry Education in China</em>, 37(6), 41–44',
    url:'https://fec.bjfu.edu.cn/article/id/10237',
    label:'View',tags:'teaching'
  },
  {
    year:2018,
    title:'Establishment of predicting models for Pinus tabulaeformis stand volume based on mixed models',
    original:'基于混合模型的油松林分蓄积量预测模型的建立',
    authors:'S. Wang, H. Deng, <strong>W. Xiang</strong>, et al.',
    venue:'<em>Journal of Northwest A&F University (Natural Science Edition)</em>, 46(2), 29–38, 46',
    url:'https://a.xueshu.baidu.com/homepage/u/8881c45665d392ea4e963d4d365f6ee8',
    label:'View',tags:'growth methods'
  },
  {
    year:2017,
    title:'Effects of thinning and climate factors on Larix olgensis tree-ring width',
    original:'间伐与气候对长白落叶松树轮宽度的影响',
    authors:'S. Cui, <strong>W. Xiang</strong>',
    venue:'<em>Scientia Silvae Sinicae</em>, 53(12), 1–11',
    url:'https://doi.org/10.11707/j.1001-7488.20171201',
    label:'DOI',tags:'growth climate management dendro'
  },
  {
    year:2017,
    title:'Additive crown width models comprising nonlinear simultaneous equations for Prince Rupprecht larch (Larix principis-rupprechtii) in northern China',
    original:'',
    authors:'L. Fu, <strong>W. Xiang</strong>, G. Wang, K. Hao, S. Tang',
    venue:'<em>Trees</em>, 31, 1959–1971',
    url:'https://doi.org/10.1007/s00468-017-1600-0',
    label:'DOI',tags:'growth methods'
  },
  {
    year:2016,
    title:'Modelling tree recruitment in relation to climate and competition in semi-natural Larix–Picea–Abies forests in northeast China',
    original:'',
    authors:'<strong>W. Xiang</strong>, X. Lei, X. Zhang',
    venue:'<em>Forest Ecology and Management</em>, 382, 100–109',
    url:'https://doi.org/10.1016/j.foreco.2016.09.050',
    label:'DOI',tags:'growth climate regeneration methods'
  },
  {
    year:2014,
    title:'Radial trends in black spruce wood density can show an age- and growth-related decline',
    original:'',
    authors:'<strong>W. Xiang</strong>, M. Leitch, D. Auty, E. Duchateau, A. Achim',
    venue:'<em>Annals of Forest Science</em>, 71(5), 603–615',
    url:'https://doi.org/10.1007/s13595-014-0363-7',
    label:'DOI',tags:'growth dendro methods'
  },
  {
    year:2014,
    title:'Wood density–climate relationships are mediated by dominance class in black spruce (Picea mariana)',
    original:'',
    authors:'<strong>W. Xiang</strong>, D. Auty, T. Franceschini, M. Leitch, A. Achim',
    venue:'<em>Forests</em>, 5(6), 1163–1184',
    url:'https://doi.org/10.3390/f5061163',
    label:'DOI',tags:'climate dendro methods'
  },
  {
    year:2011,
    title:'Matrix growth model and harvest scenario simulation for multiple uses of larch-spruce-fir forests',
    original:'落叶松云冷杉林矩阵生长模型及多目标经营模拟',
    authors:'<strong>W. Xiang</strong>, X. Lei, L. Hong, J. Sun, P. Wang',
    venue:'<em>Scientia Silvae Sinicae</em>, 47(6), 77–87',
    url:'https://html.rhhz.net/linyekexue/html/20110612.htm',
    label:'View',tags:'growth management methods'
  },
  {
    year:2009,
    title:'Individual basal area growth model using a multi-level linear mixed model with repeated measures',
    original:'基于混合模型的单木断面积生长模型',
    authors:'X. Lei, Y. Li, <strong>W. Xiang</strong>',
    venue:'<em>Scientia Silvae Sinicae</em>, 45(1), 74–80',
    url:'https://a.xueshu.baidu.com/homepage/u/8881c45665d392ea4e963d4d365f6ee8',
    label:'View',tags:'growth methods'
  },
  {
    year:2008,
    title:'Individual tree mortality models for semi-natural larch-spruce-fir forests in Jilin Province, northeastern China',
    original:'近天然落叶松云冷杉林单木枯损模型研究',
    authors:'<strong>W. Xiang</strong>, X. Lei, G. Liu, G. Xu, G. Chen',
    venue:'<em>Journal of Beijing Forestry University</em>, 30(6), 90–98',
    url:'https://doi.org/10.13332/j.1000-1522.2008.06.008',
    label:'DOI',tags:'mortality growth methods'
  }
];

const publicationList=document.getElementById('publicationList');
const noResults=document.getElementById('noResults');
const pubSearch=document.getElementById('pubSearch');
const publicationHeading=document.querySelector('#publications .section-heading p');
const filterContainer=document.querySelector('#publications .filter-buttons');

if(publicationHeading){
  publicationHeading.textContent=`Complete verified publication list · ${publications.length} journal articles · 2008–2026`;
}

if(filterContainer){
  filterContainer.innerHTML=`
    <button class="filter active" data-filter="all">All (${publications.length})</button>
    <button class="filter" data-filter="growth">Growth & Models</button>
    <button class="filter" data-filter="climate">Climate</button>
    <button class="filter" data-filter="regeneration">Regeneration</button>
    <button class="filter" data-filter="mortality">Mortality</button>
    <button class="filter" data-filter="management">Management</button>
    <button class="filter" data-filter="methods">Methods</button>
    <button class="filter" data-filter="teaching">Teaching</button>`;
}

function renderPublications(items){
  publicationList.innerHTML=items.map(p=>`
    <article class="pub-item" data-tags="${p.tags}">
      <div class="pub-year">${p.year}</div>
      <div class="pub-main">
        <h3><a href="${p.url}" target="_blank" rel="noopener">${p.title}</a>${p.original?`<span style="display:block;margin-top:4px;color:var(--muted);font-size:13px;font-weight:400;line-height:1.5">${p.original}</span>`:''}</h3>
        <p class="authors">${p.authors}</p>
        <p class="venue">${p.venue}</p>
      </div>
      <div class="pub-actions"><a href="${p.url}" target="_blank" rel="noopener">${p.label}</a></div>
    </article>`).join('');
}
renderPublications(publications);

let activeFilter='all';
const filterButtons=[...document.querySelectorAll('#publications .filter')];
function filterPublications(){
  const query=(pubSearch.value||'').toLowerCase().trim();
  let visible=0;
  [...document.querySelectorAll('.pub-item')].forEach(pub=>{
    const text=pub.textContent.toLowerCase();
    const tags=(pub.dataset.tags||'').toLowerCase();
    const matchesText=!query||text.includes(query)||tags.includes(query);
    const matchesTag=activeFilter==='all'||tags.split(/\s+/).includes(activeFilter);
    const show=matchesText&&matchesTag;
    pub.hidden=!show;
    if(show)visible++;
  });
  noResults.hidden=visible!==0;
}
pubSearch.addEventListener('input',filterPublications);
filterButtons.forEach(button=>button.addEventListener('click',()=>{
  filterButtons.forEach(b=>b.classList.remove('active'));
  button.classList.add('active');
  activeFilter=button.dataset.filter;
  filterPublications();
}));

document.getElementById('year').textContent=new Date().getFullYear();

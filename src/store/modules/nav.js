const state = {
	nav:[
        {
          title: '育人',
          mainImg: require('@/assets/main/1.jpg'),
          link:'',
          subnav: [
            {
              title: 'workshop',
              link: '/'
            },
            {
              title: 'idol',
              link: '/'
            },
          ]
        },
        {
          title: '入学',
          mainImg: require('@/assets/main/2.jpg'),
          link:'',
          subnav: [
            {
              title: '小学',
              link: '/'
            },
            {
              title: '初中',
              link: '/'
            },
            {
              title: '高中',
              link: '/'
            },
          ]
        },
        {
          title: '课程',
          mainImg: require('@/assets/main/3.jpg'),
          link:'',
          subnav: [
            {
              title: '课程',
              link: '/'
            },
            {
              title: '特色课',
              link: '/'
            },
            {
              title: '国际课',
              link: '/'
            },
          ]
        },
        {
          title: '升学',
          mainImg: require('@/assets/main/4.jpg'),
          link:'',
          subnav: [
            {
              title: '考上的',
              link: '/'
            },
            {
              title: '考不上的',
              link: '/'
            },
            {
              title: '外地的',
              link: '/'
            },
          ]
        },
        {
          title: '学生生活',
          mainImg: require('@/assets/main/5.jpg'),
          link:'',
          subnav: [
            {
              title: '食',
              link: '/'
            },
            {
              title: '宿',
              link: '/'
            },
            {
              title: '习',
              link: '/'
            },
          ]
        },
        {
          title: '新闻',
          mainImg: require('@/assets/main/6.jpg'),
          link:'',
          subnav: [
            {
              title: '集团动态',
              link: '/'
            },
            {
              title: '媒体声音',
              link: '/'
            },
            {
              title: '政策法规',
              link: '/'
            },
          ]
        },
    ],
};
const getters = {
	nav: state => state.nav,
};
const actions = {
	
};
const mutations = {
	
};
export default {
	state,
	getters,
	actions,
	mutations,
};
export default {
    name:'testimonials',
    title:'Testimonials',
    type: 'document',
    fields:[
        { 
            name:'name',
            title:'Name',
            type: 'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'position',
            title:'Position',
            type:'string'
        },
        {
            name:'relative',
            title:'Relative',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        }
    ]
}
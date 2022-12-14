export default{
    name:'experiences',
    title:'Experiences',
    type: 'document',
    fields:[
        {
            name:'position',
            title:'Position',
            type:'string'
        },
        {
            name:'company',
            title:'Company',
            type:'string'
        },
        {
            name:'desc',
            title:'Desc',
            type:'string'
        },
        {
            name:'from',
            title:'From',
            type:'date',
            options: {
                dateFormat: 'YYYY/MM',
                calendarTodayLabel: 'Today'
            }
        },
        {
            name:'to',
            title:'To',
            type:'date',
            options: {
                dateFormat: 'YYYY/MM',
                calendarTodayLabel: 'Today'
            }
        }
    ]
}
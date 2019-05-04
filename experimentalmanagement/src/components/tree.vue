<template>
  <Table border :columns="columns7" :data="data6"></Table>
</template>
<script>
  export default {
    data () {
      return {
        getUse:"",
        columns7: [
          {
            title: '实验室',
            key: 'room',
          },
          {
            title: '实验名称',
            key: 'experimentAgain'
          },
          {
            title: '是否进行',
            key: 'sjieaction',
          }
        ],
        data6: [
          {
            room: '实验1',
            experimentAgain: "实验名称1",
            sjieaction:"是"
          },
          {
            room: '实验2',
            experimentAgain: "实验名称2",
            sjieaction:"否"
          }
        ]
      }
    },
    created:function(){
      if(localStorage.getItem("adminSure") == "是"){
        this.data6[1].sjieaction = "是"
      }
    },
    methods: {

    }
  }
</script>

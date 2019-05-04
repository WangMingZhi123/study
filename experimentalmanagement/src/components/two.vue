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
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.room)
              ]);
            }
          },
          {
            title: '再实验',
            key: 'experimentAgain'
          },
          {
            title: '是否申请',
            key: 'jieaction',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.show(params.index)
                    }
                  },
                },params.row.jieaction)
              ]);
            }
          }
        ],
        data6: [
          {
            room: '实验1',
            experimentAgain: "否",
            jieaction:"已借到"
          },
          {
            room: '实验2',
            experimentAgain: "否",
            jieaction:"否"
          }
        ]
      }
    },
    created:function(){
      this.getUse = localStorage.getItem("user");
      if(localStorage.getItem("adminSure") == "是"){
this.data6[1].jieaction = "已借到"
      }
    },
    methods: {
      show (index) {
        if(this.getUse != "teacher"){
          this.$Message.error('只有老师才能操作！！！');
          return;
        }
        if(this.data6[index].jieaction == "是"){
          this.$Message.error('已经借到不能在操作！！！');
          return;
        }
        this.$Modal.info({
          title: '确定提出申请吗？',
          content: `room：${this.data6[index].room}<br>experimentAgain：${this.data6[index].experimentAgain}`
        });
        this.data6[1].jieaction = "正在申请";
        this.teacherOperater = {
          teacherName : "teacher",
          studentName: "student"
        },
          localStorage.setItem("teacherOperater" ,this.teacherOperater);
      },
      remove (index) {
        this.data6.splice(index, 1);
      }
    }
  }
</script>

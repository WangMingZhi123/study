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
            title: '借用老师姓名',
            key: 'teacherName'
          },
          {
            title: '借用学生姓名',
            key: 'studentName'
          },
          {
            title: '实验是否结束',
            key: 'experimentStart'
          },
          {
            title: '是否借出',
            key: 'action',
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
                },params.row.action)
              ]);
            }
          }
        ],
        data6: [
          {
            room: '实验1',
            teacherName: "teacher",
            studentName: 'student',
            experimentStart:"否",
            action:"是"
          },
          {
            room: '实验2',
            teacherName: "",
            studentName: '',
            experimentStart:"否",
            action:"否"
          }
        ]
      }
    },
    created:function(){
      this.getUse = localStorage.getItem("user");
      if(localStorage.getItem("teacherOperater") != null){
        this.data6[1].teacherName = "teacher";
        this.data6[1].studentName = "student";
      }
      if(localStorage.getItem("adminSure") == "是"){
        this.data6[1].action = "是"
      }
    },
    methods: {
      show (index) {
        if(this.getUse != "admin"){
          this.$Message.error('只有admin管理员才能操作！！！');
          return;
        }
        this.$Modal.info({
          title: '确定是否借出',
          content: `room：${this.data6[index].room}<br>teacherName：${this.data6[index].teacherName}<br>studentName：${this.data6[index].studentName}`
        });
        if(this.data6[index].action == "否"){
          localStorage.setItem("adminSure","是");
          this.data6[1].action = "是";

        }
      },
      remove (index) {
        this.data6.splice(index, 1);
      }
    }
  }
</script>

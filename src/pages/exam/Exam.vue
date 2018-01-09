<template>
  <div class="col-xs-12">
    <loading v-if="isLoading"></loading>
    <div class="panel panel-default" v-else>
      <div class="panel-heading">
        <h3>
          第
          <span class="text-danger">{{examIndex}}</span>
          题，共
          <span class="text-danger">{{sum}}</span>
          题
        </h3>
      </div>
      <div class="panel-body">
        <p>{{exam.title}}</p>
        <p>{{exam.content}}</p>
        <p class="text-primary">选项：</p>
        <template v-if="type === 0">
          <div class="radio" v-for="(item, index) in formatOptions" :key="index">
            <label>
              <input v-if="index === 0" v-model="radioValue" type="radio" name="answers" :value="index" checked/>
              <input v-else v-model="radioValue" type="radio" name="answers" :value="index"/>
              {{item}}
            </label>
          </div>
        </template>
        <template v-else-if="type === 1">
          <div class="checkbox" v-for="item in formatOptions" :key="item.id">
          <label>
            <input type="checkbox" v-model="checkboxValue" name="checkboxAnswer" :value="item.id">
            {{item}}
          </label>
        </div>
        </template>
        <a @click="prevExam" class="btn btn-success">上一题</a>
        <a @click="nextExam" class="btn btn-success">下一题</a>
      </div>
    </div>
  </div>
</template>

<script>
import loading from '@/components/loading/Loading';
import domain from '../../domain/domain';
import types from '../../domain/types';
export default {
  name: 'exam',
  mixins : [domain],
  data () {
    return {
      sum : 100,
      exam : null,
      type : 1, //0为radio,1为checkbox
      title : '下面的代码会在 console 输出神马？',
      content : `(function(){
                  var a = b = 3;
                })(); `,
      options : ['undefined', '3', '空字符串', 'null'],
      radioValue : 0,
      checkboxValue:[],
      examIndex : 1,
      isLoading : true
    }
  },
  components : {
    loading
  },
  async created(){
    //检测用户是否注册,未注册回到注册页
    this.userChecked();

    this.getExamIndex();
    //await this.getExamsRandom();
    this.getExam();
  },
  computed : {
      formatOptions : function(){
        var formatArr = [];
        for(var i = 0, len = this.options.length; i < len; i++){
         formatArr.push(`${String.fromCharCode(65 + i)}.${this.options[i]}`);
        }
        return formatArr;
      }
  },
  methods : {
    //获取当前为第几题
    getExamIndex(){
      var examIndex = this.sessionGetItem(types.EXAM_INDEX);
      if(!examIndex){
      this.sessionSetItem(types.EXAM_INDEX, 1);
      }else{
      this.examIndex = examIndex;
      }
    },
    //随机获取指定考题范围的n条数据
    getExamsRandom(){
      var scopeId = this.sessionGetItem(types.USER_SCOPE);
      this.axios.post('http://localhost:8888/getExamsRandom', {
        scopeId
      }).then((result)=>{
        this.sessionSetItem(types.EXAMS, result.data);
      }).catch((result)=>{
        alert('随机获取考题失败，原因：' + result);
      })
    },
    //获取考题
    getExam(){
      var exams = this.sessionGetItem(types.EXAMS);
      this.exam = exams[this.examIndex - 1];
      this.isLoading = false;
      console.log(this.exam);
    },
    //下一题
    nextExam : function(){

    },
    //上一题
    prevExam : function(){

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>

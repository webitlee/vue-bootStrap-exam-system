<template>
  <div class="col-xs-12">
    <loading v-if="isLoading"></loading>
    <div class="panel panel-default" v-else>
      <div class="panel-heading">
        <h3>
          第
          <span class="text-danger">{{examIndex}}</span>
          题，共
          <span class="text-danger">{{count}}</span>
          题
        </h3>
      </div>
      <div class="panel-body">
        <p>{{exam.title}}</p>
        <p>{{exam.content}}</p>
        <p class="text-primary">选项：</p>
        <template v-if="exam.type === 0">
          <div class="radio" v-for="(item, index) in formatOptions" :key="index">
            <label>
              <input v-if="index === 0" v-model="radioValue" type="radio" name="answers" :value="index" checked/>
              <input v-else v-model="radioValue" type="radio" name="answers" :value="index"/>
              {{item}}
            </label>
          </div>
        </template>
        <template v-else-if="exam.type === 1">
          <div class="checkbox" v-for="item in formatOptions" :key="item.id">
          <label>
            <input type="checkbox" v-model="checkboxValue" name="checkboxAnswer" :value="item.id">
            {{item.option}}
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
      count : 0,
      exam : null,
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
    this.examIndex = this.getExamIndex();
    this.count = this.getExamCount();
    await this.getExamsRandom();
    this.exam = this.getExam();
  },
  computed : {
      formatOptions : function(){
        var formatArr = [];
        for(var i = 0, len = this.exam.answers.length; i < len; i++){
          let obj = {
            id : this.exam.answers[i].id,
            option : `${String.fromCharCode(65 + i)}.${this.exam.answers[i].option}`
          };  
          formatArr.push(obj);
        }
        return formatArr;
      }
  },
  methods : {
    //从session获取当前为第几题
    getExamIndex(){
      var examIndex = this.sessionGetItem(types.EXAM_INDEX);
      if(!examIndex){
        this.sessionSetItem(types.EXAM_INDEX, 1);
        return 1;
      }else{
        return examIndex;
      }
    },
    //设置当前为第几题到session
    setExamIndex(examIndex){
      this.sessionSetItem(types.EXAM_INDEX, examIndex);
    },
    //从session获取当前总题数
    getExamCount(){
      var examsCount = this.sessionGetItem(types.EXAMS_COUNT);
      return examsCount;
    },
    //从session设置当前总题数
    setExamCount(count){
      this.sessionSetItem(types.EXAMS_COUNT, count);
    },
    //从session获取所有考题
    getExams(){
      return this.sessionGetItem(types.EXAMS);
    },
    //设置所有考题到session
    setExams(exams){
      this.sessionSetItem(types.EXAMS, exams);
    },
    //随机获取指定考题范围的n条数据
    async getExamsRandom(){
      if(this.getExams()){
        return;
      }
      var scopeId = this.sessionGetItem(types.USER_SCOPE);
      await this.axios.post('http://localhost:8888/getExamsRandom', {
        scopeId
      }).then((result)=>{
        console.log(result.data);
        this.setExams(result.data.exams);
        this.count = result.data.count;
        this.setExamCount(this.count);
      }).catch((result)=>{
        alert('随机获取考题失败，原因：' + result);
      })
    },
    //获取当前考题
    getExam(){
      var exams = this.sessionGetItem(types.EXAMS);
      this.isLoading = false;
      return exams[this.examIndex - 1];
    },
    //下一题
    nextExam(){
      if(this.examIndex >= this.count){
        return;
      }
      this.examIndex++;
      this.setExamIndex(this.examIndex);
      this.exam = this.getExam();
    },
    //上一题
    prevExam(){
      if(this.examIndex <= 1){
        return;
      }
      this.examIndex--;
      this.setExamIndex(this.examIndex);
      this.exam = this.getExam();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>

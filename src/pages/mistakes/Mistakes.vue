<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3>
              第
              <span class="text-danger">{{num}}</span>
              题，共
              <span class="text-danger">{{sum}}</span>
              题
            </h3>
          </div>
          <div class="panel-body">
            <p>{{title}}</p>
            <p>{{content}}</p>
            <p class="text-primary">选项：</p>
            <template v-if="type === 0">
              <div class="radio" v-for="(item, index) in formatOptions" :key="index">
                <label>
                  <input v-model="radioValue" type="radio" name="answers" :value="index" disabled/>
                  <span :class="{'text-danger' : radioValue === index ? true : false}">{{item}}</span>
                  <span v-if="radioValue === index" class="glyphicon glyphicon-remove text-danger"></span>
                </label>
              </div>
            </template>
            <template v-else-if="type === 1">
             <div class="checkbox" v-for="(item, index) in formatOptions" :key="index">
              <label>
                <input type="checkbox" v-model="checkboxValue" name="checkboxAnswer" :value="index" disabled>
                <span :class="{'text-danger' : isCheckboxMistake(index)}">{{item}}</span>
                <span v-if="isCheckboxMistake(index)" class="glyphicon glyphicon-remove text-danger"></span>
              </label>
            </div>
            </template>
            <hr/>
            <p class="text-primary">正确答案：</p>
            <p class="text-success" v-for="(item, index) in correct" :key="index">
              {{item}}
              <span class="glyphicon glyphicon-ok text-success"></span>
              </p>
            <a @click="prevMistake" class="btn btn-success">上一个错题</a>
            <a @click="nextMistake" class="btn btn-success">下一个错题</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mistakes',
  data () {
    return {
      //当前考题数
      num : 10,
      //考题总数
      sum : 100,
      //考题类型
      type : 1, //0为radio,1为checkbox
      //考题标题
      title : '下面的代码会在 console 输出神马？',
      //考题正文
      content : `(function(){
                  var a = b = 3;
                })(); `,
      //选项列表
      options : ['undefined', '3', '空字符串', 'null'],
      //选中的单选框
      radioValue : 2,
      //选中的复选框
      checkboxValue:[1, 3],
    }
  },
  computed : {
      //格式化选项
      formatOptions : function(){
        var formatArr = [];
        for(var i = 0, len = this.options.length; i < len; i++){
         formatArr.push(`${String.fromCharCode(65 + i)}.${this.options[i]}`);
        }
        return formatArr;
      },
      //正确答案
      correct : function(){
        var answers = this.formatOptions;
        if(!this.type){
          for(var i =0, len = answers.length; i < len; i++){
            if(i === this.radioValue){
              return [answers[i]];
            }
          }
        }
        var correctAnswers = [];
        for(var i =0, len = answers.length; i < len; i++){
          for(var j = 0; j < this.checkboxValue.length; j++){
            if(i === this.checkboxValue[j]){
              correctAnswers.push(answers[i]);
            }
          }
          
        }
        return correctAnswers;
      }
     
  },
  methods : {
    a : function(){
      console.log(this.checkboxValue);
    },
    //下一题
    nextMistake : function(){
      this.router.go(1);
    },
    //上一题
    prevMistake : function(){
      this.router.back();
    },
    //是否是已经选中的选项
    isCheckboxMistake : function(index){
      for(var i = 0, len = this.checkboxValue.length; i < len; i++){
        if(index === this.checkboxValue[i]){
          return true;
        }
      }
      return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

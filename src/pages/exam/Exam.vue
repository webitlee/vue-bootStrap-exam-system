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
            <p class="text-primary">答案：</p>
            <template v-if="type === 0">
              <div class="radio" v-for="(item, index) in formatRadioAnswers" :key="index">
                <label>
                  <input v-if="index === 0" v-model="radioValue" type="radio" name="answers" :value="index" checked/>
                  <input v-else v-model="radioValue" type="radio" name="answers" :value="index"/>
                  {{item}}
                </label>
              </div>
            </template>
            <template v-else-if="type === 1">
             <div class="checkbox" v-for="(item, index) in formatCheckboxAnswers" :key="index">
              <label>
                <input type="checkbox" v-model="checkboxValue" name="checkboxAnswer" :value="index">
                {{item.answer}}
              </label>
            </div>
            </template>
            <a class="btn btn-success">下一题</a>
            <a class="btn btn-success">上一题</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exam',
  data () {
    return {
      num : 1,
      sum : 100,
      type : 1, //0为radio,1为checkbox
      title : '下面的代码会在 console 输出神马？',
      content : `(function(){
                  var a = b = 3;
                })(); `,
      radioAnswers : ['undefined', '3', '空字符串', 'null'],
      radioValue : 0,
      checkboxAnswers : [
        {
          answer : 'undefined',
          checked : false
        },
        {
          answer : '3',
          checked : false
        },
        {
          answer : '空字符串',
          checked : false
        },
        {
          answer : 'null',
          checked : false
        }
      ],
      checkboxValue:[]
    }
  },
  computed : {
      formatRadioAnswers : function(){
        var formatArr = [];
        var obj = {};
        for(var i = 0, len = this.radioAnswers.length; i < len; i++){
         formatArr.push(`${String.fromCharCode(65 + i)}.${this.radioAnswers[i]}`);
        }
        return formatArr;
      },
      formatCheckboxAnswers : function(){
        var formatArr = [];
        var obj = {};
        for(var i = 0, len = this.checkboxAnswers.length; i < len; i++){
          obj = this.checkboxAnswers[i];
          obj.answer = `${String.fromCharCode(65 + i)}.${obj.answer}`;
            formatArr.push(obj);
        }
        return formatArr;
      }
  },
  methods : {
    a : function(){
      console.log(this.checkboxValue);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>

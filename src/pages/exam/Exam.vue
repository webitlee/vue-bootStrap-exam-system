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
                  <input v-if="index === 0" v-model="radioValue" type="radio" name="answers" :value="index" checked/>
                  <input v-else v-model="radioValue" type="radio" name="answers" :value="index"/>
                  {{item}}
                </label>
              </div>
            </template>
            <template v-else-if="type === 1">
             <div class="checkbox" v-for="(item, index) in formatOptions" :key="index">
              <label>
                <input type="checkbox" v-model="checkboxValue" name="checkboxAnswer" :value="index">
                {{item}}
              </label>
            </div>
            </template>
            <a @click="prevExam" class="btn btn-success">上一题</a>
            <a @click="nextExam" class="btn btn-success">下一题</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'exam',
  props : ['id'],
  data () {
    return {
      num : 1,
      sum : 100,
      type : 1, //0为radio,1为checkbox
      title : '下面的代码会在 console 输出神马？',
      content : `(function(){
                  var a = b = 3;
                })(); `,
      options : ['undefined', '3', '空字符串', 'null'],
      radioValue : 0,
      checkboxValue:[]
    }
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
    a : function(){
      console.log(this.checkboxValue);
    },
    //下一题
    nextExam : function(){
      console.log(this.id);
    },
    //上一题
    prevExam : function(){
      history.back();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
 
</style>

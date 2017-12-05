import Vue from 'vue';
import Router from 'vue-router';
import Nav from '@/pages/nav/Nav';
import Footer from '@/pages/footer/Footer';
import Login from '@/pages/login/Login';
import Exam from '@/pages/exam/Exam';
import Score from '@/pages/score/Score';
import Mistakes from '@/pages/mistakes/Mistakes';
import UploadExam from '@/pages/upload_exam/Upload_exam';
import ModifyExam from '@/pages/modify_exam/Modify_exam';

Vue.use(Router)

export default new Router({
  mode : 'history',
  props : ['mistakeId'],
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default : Login,
        nav : Nav,
        footer : Footer
      }
    },
    {
      path : '/exam/:id',
      name : 'exam',
      components : {
        default : Exam,
        nav : Nav,
        footer : Footer
      },
      props : {
        default : true,
        nav : false,
        footer : false
      }
    },
    {
      path : '/score',
      name : 'score',
      components : {
        default : Score,
        nav : Nav,
        footer : Footer
      }
    },
    {
      path : '/mistakes/:mistakeId',
      name : 'mistakes',
      components : {
        default : Mistakes,
        nav : Nav,
        footer : Footer
      },
      props : {
        default :  true,
        nav : false,
        footer : false
      }
    },
    {
      path : '/upload',
      name : 'upload_exam',
      components : {
        default : UploadExam,
        nav : Nav,
        footer : Footer
      }
    },
    {
      path : 'modify',
      name : 'modify_exam',
      components : {
        defalut : ModifyExam,
        nav : Nav,
        footer : Footer
      }
    }
  ]
})

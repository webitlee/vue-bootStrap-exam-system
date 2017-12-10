import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/pages/login/Login';
import Exam from '@/pages/exam/Exam';
import Score from '@/pages/score/Score';
import Mistakes from '@/pages/mistakes/Mistakes';
import UploadExam from '@/pages/upload_exam/Upload_exam';
import ModifyExam from '@/pages/modify_exam/Modify_exam';
import ListExam from '@/pages/list_exam/List_exam';
import AdminLogin from '@/pages/admin_login/Admin_login';

Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: {
        default : Login
      }
    },
    {
      path : '/exam/:id',
      name : 'exam',
      components : {
        default : Exam
      },
      props : {
        default : true
      }
    },
    {
      path : '/score',
      name : 'score',
      components : {
        default : Score
      }
    },
    {
      path : '/mistakes/:mistakeId',
      name : 'mistakes',
      components : {
        default : Mistakes
      },
      props : {
        default :  true
      }
    },
    {
      path : '/upload',
      name : 'upload_exam',
      components : {
        default : UploadExam
      }
    },
    {
      path : '/modify/:modifyId',
      name : 'modify_exam',
      components : {
        default : ModifyExam
      },
      props : {
        default : true
      }
    },
    {
      path : '/list/:page',
      name : 'list_exam',
      components : {
        default : ListExam
      },
      props : {
        default : true
      }
    },
    {
      path : '/admin/login',
      name : 'admin_login',
      components : {
        default : AdminLogin
      }
    }
  ]
})

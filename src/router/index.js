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
  routes: [
    {
      path: '/',
      name: 'index',
      component: Login
    },
    {
      path : '/exam',
      name : 'exam',
      component : Exam
    },
    {
      path : '/score',
      name : 'score',
      component : Score
    },
    {
      path : '/mistakes',
      name : 'mistakes',
      component : Mistakes
    },
    {
      path : '/upload',
      name : 'upload_exam',
      component : UploadExam
    },
    {
      path : '/modify',
      name : 'modify_exam',
      component : ModifyExam
    },
    {
      path : '/list',
      name : 'list_exam',
      component : ListExam
    },
    {
      path : '/admin',
      name : 'admin_login',
      component : AdminLogin
    }
  ]
})

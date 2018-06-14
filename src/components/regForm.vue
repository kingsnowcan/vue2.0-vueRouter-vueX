<template>
<div class="login-form">
     <div class="g-form">
         <div class="g-form-line">
             <span class="g-form-label">用户名：</span>
             <div class="g-form-input">
               <input type="text" v-model="usernameModel" placeholder="请输入用户名">
             </div>
             <span class="g-form-error">{{userErrors.errorText}}</span>
         </div>
         <div class="g-form-line">
             <span class="g-form-label">密码：</span>
             <div class="g-form-input">
               <input type="password" v-model="passwordModel" placeholder="请输入密码">              
             </div>
             <span class="g-form-error">{{passwordErrors.errorText}}</span>
           </div>          
     <div class="g-form-line">
             <span class="g-form-label">手机号码：</span>
             <div class="g-form-input">
               <input type="text" v-model="phoneModel" placeholder="请输入手机号码">              
             </div>
             <span class="g-form-error">{{phoneErrors.errorText}}</span>
              </div>
              <div class="g-form-line">
             <span class="g-form-label">邮箱：</span>
             <div class="g-form-input">
               <input type="email" v-model="emailModel" placeholder="请输入手机号码">              
             </div>
             <span class="g-form-error">{{emailErrors.errorText}}</span>
           </div>
             <div class="g-form-line">
             <div class="g-form-btn">
              <a class="button" @click="onReg">注册</a>
             </div>
         </div>
         <p>{{errorText}}</p>
     </div>
</div>
</template>

<script>
export default {
  props:{
    
  },//数组['',''],对象:{name:type}
  data () {
    return {
      usernameModel:'',
      passwordModel:'',
      phoneModel:'',
      emailModel:'',
      errorText:''
    }
  },
  computed:{
    userErrors(){
      let status,errorText 
      if(!/@/g.test(this.usernameModel)){
        status = false
        errorText = '不包含@'
      }else{
        status = true
        errorText = ''
      }
      if(!this.userFlag){
        errorText = ''
        this.userFlag = true
      }
      return {
        status,
        errorText
      }
    },
    passwordErrors(){
       let status,errorText
       if(!/^\w{1,6}$/g.test(this.passwordModel)){
        status = false
        errorText = '密码不是1-6位'
       }else{
        status = true
        errorText = ''
       }
       if(!this.passwordFlag){
        errorText = ''
        this.passwordFlag = true
      }
       return {
        status,
        errorText
       }
    },
    phoneErrors(){
       let status,errorText
       let phoneReg = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/
       if(phoneReg.test(this.phoneModel)){
        status = true
        errorText = ''
       }else{
        status = false
        errorText = '请输入正确的手机号码'
       }
       if(!this.phoneFlag){
        errorText = ''
        this.phoneFlag = true
      }
       return {
        status,
        errorText
       }
    },
    emailErrors(){
       let status,errorText
       if(!/^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/g.test(this.emailModel)){
        status = false
        errorText = '请输入正确的邮箱'
       }else{
        status = true
        errorText = ''
       }
       if(!this.emailFlag){
        errorText = ''
        this.emailFlag = true
      }
       return {
        status,
        errorText
       }
    },
  },
  methods:{
    onReg(){
     
      if(this.passwordErrors.status&&this.userErrors.status&&this.phoneErrors.status&&this.emailErrors.status){
        this.errorText = ''
         console.log(this.usernameModel,this.passwordModel,this.phoneModel,this.emailModel) 
       /*  this.$http.get('api/login')  
         .then((res)=>{
            this.$emit('has-log',res.data)
         },(error)=>{
          console.log('错误的回调')
         })*/      
      }else{
        this.errorText = '部分选项没通过'
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


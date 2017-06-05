<template>
  <div>
    <header class="site-header jumbotron">
      <div class="container">
        <div class="row">
          <div class="col-xs-12">
            <h1>请发表对Vue的评论</h1>
          </div>
        </div>
      </div>
    </header>
    <div class="container">
    <!--  使用子组件 -->
      <comment-add></comment-add>
      <comment-list></comment-list>
    </div>
  </div>
</template>

<script>
  // 引入子组件
  import CommentAdd from './components/CommentAdd.vue'
  import CommentList from './components/CommentList.vue'

  export default {
    // 组件中必须是函数
    data () {
      return {
          comments:[]
      }
    },
    // 注册子组件
    components: {
      CommentAdd,
      CommentList
    }

    
  }
</script>

<style>

</style>

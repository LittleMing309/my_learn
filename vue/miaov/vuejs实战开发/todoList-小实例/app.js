// 存取localStorage中的数据
var store = {
    save(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    },
    fetch(key){
        return JSON.parse(localStorage.getItem(key)) || [];
    }
}

// var list = [
//     {
//         title: "吃饭打豆豆",
//         isChecked: false //状态为false，为不选中  任务未完成
//     },
//     {
//         title: "妙味课堂",
//         isChecked: true   //状态为true，为选中    任务完成
//     }
// ];

var list = store.fetch('todo-list');
    
var vm = new Vue({
    el: ".main",
    data: {
        list: list,
        todo: "",
        edtorTodos: '',  //记录正在编辑的数据
        beforeTitle: '', //记录正在编辑的数据的title
        visibitility : 'all'
    },
    watch : {
        /*list : function(){  // 监听list这个属性,当这个属性对应的值发生改变就会执行函数     浅监听
            store.save('todo-list',this.list);
        }*/
        list : {    // 深度监听，当list中的键值对发生改变时候也会触发
            handler : function(){   
                store.save('todo-list', this.list);
            },
            deep : true
        }
    },
    computed: {
        noCheckeLength: function () {
            return this.list.filter(function (item) {
                return !item.isChecked
            }).length
        },
        filteredList : function(){
            // 过滤的时候有三种情况，all finished unfinished
            
            var filter = {
                all : function(list){
                    return list;
                },
                finished : function(list){
                    return list.filter(function(item){
                        return item.isChecked;
                    })
                },
                unfinished : function(list){
                    return list.filter(function(item
                    ){
                        return !item.isChecked;
                    })
                }
            }

            return filter[this.visibitility] ? filter[this.visibitility](list) : list;
        }
    },
    methods: {
        addTodo() {  //添加任务
            this.list.push({
                title: this.todo,
                isChecked: false
            });
            this.todo = '';
        },
        deleteTodo(todo) { //删除任务
            var index = this.list.indexOf(todo);
            this.list.splice(index, 1);
        },
        edtorTodo(todo) {  //编辑任务
            console.log(todo);
            //编辑任务的时候，记录一下编辑这条任务的title，方便在取消编辑的时候重新给之前的title
            this.beforeTitle = todo.title;

            this.edtorTodos = todo;


        },
        edtorTodoed(todo) { //编辑任务成功
            this.edtorTodos = '';
        },
        cancelTodo(todo) {  //取消编辑任务

            todo.title = this.beforeTitle;

            this.beforeTitle = '';

            //让div显示出来，input隐藏
            this.edtorTodos = '';
        }
    },
    directives: {
        "foucs": {
            update(el, binding) {
                if (binding.value) {
                    el.focus();
                }
            }
        }
    }
});

// 监听hash值变化
function watchHashChange(){
    var hash = window.location.hash.slice(1);
    vm.visibitility = hash;
}

watchHashChange();

window.addEventListener('hashchange',watchHashChange,false);
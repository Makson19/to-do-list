
var i = 0;

function addItem(){
    let item = document.getElementById("item")
    let areaItem = document.getElementById("area-tarefas")

    if(item.value !== ''){
        // Criando a div onde armazenaremos a tarefa digitada pelo usuário.
        let div = document.createElement("div")
        div.className = "tarefa"

        // Criando a div que irá conter os elementos checkbox e label.
        let divElem = document.createElement("div")

        // Criando o checkbox.
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = i.toString()
        
        // Criando o label onde estará armazenado o texto digitado pelo usuário.
        let label = document.createElement("label")

        // Adicionando ao label o texto que foi digitado no input pelo usuário.
        label.innerText = item.value

        // Criando o atributo "for" para o elemento "label".
        const forAt = document.createAttribute("for")
        forAt.value = i.toString()

        // Adicionando ao label o atributo "for".
        label.setAttributeNode(forAt)

        // Criando o botão de remover a tarefa.
        let btnRemove = document.createElement("button")
        btnRemove.className = "btnRemove"

        // Adicionando a função de excluir a tarefa ao botão btnRemove.
        btnRemove.onclick = () => div.remove()

        // Adicionando o checkbox e o label criados acima na divElem, que também foi criada acima.
        divElem.appendChild(checkbox)
        divElem.appendChild(label)

        // Adicionando a divElem e o botão de excluir uma tarefa na div.
        div.appendChild(divElem)
        div.appendChild(btnRemove)

        // Adicionando a div na div cujo id é "area-tarefas" que está no código HTML.
        areaItem.appendChild(div)

        // Resetando o valor do input onde o usuário digita as tarefas.
        item.value = ''
        i++
    } else {
        alert("Digite alguma tarefa!!")
    }
}


document.addEventListener('keydown', add)

// Função adicionada ao input onde o usuário digita as atividades da lista. 
// Essa função está destinada a tecla "Enter". Após digitar a tarefa, ao pressionar o "Enter", ela será adicionada na lista. 
function add(event){
    // Pegando o valor da tecla "Enter" e atribuíndo a variável tecla.
    //let tecla = event.keyCode
    
    // Atribuindo a variável "item" todo o texto que foi digitado no input.
    let item = document.getElementById("item")

    // Pegando a área onde as tarefas digitadas pelo usuário estarão.
    let areaItem = document.getElementById("area-tarefas")

    if(event.keyCode == 13 && item.value !== ''){
        // Criando a div onde armazenaremos a tarefa digitada pelo usuário.
        let div = document.createElement("div")
        div.className = "tarefa"
        
        // Criando a div que irá conter os elementos checkbox e label.
        let divElem = document.createElement("div")
        
        // Criando o checkbox.
        let checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.id = i.toString()
                
        // Criando o label onde estará armazenado o texto digitado pelo usuário.
        let label = document.createElement("label")
        
        // Adicionando ao label o texto que foi digitado no input pelo usuário.
        label.innerText = item.value
        
        // Criando o atributo "for" para o elemento "label".
        const forAt = document.createAttribute("for")
        forAt.value = i.toString()
        
        // Adicionando ao label o atributo "for".
        label.setAttributeNode(forAt)
        
        // Criando o botão de remover a tarefa.
        let btnRemove = document.createElement("button")
        btnRemove.className = "btnRemove"
        
        // Adicionando a função de excluir a tarefa ao botão btnRemove.
        btnRemove.onclick = () => div.remove()
        
        // Adicionando o checkbox e o label criados acima na divElem, que também foi criada acima.
        divElem.appendChild(checkbox)
        divElem.appendChild(label)
        
        // Adicionando a divElem e o botão de excluir uma tarefa na div.
        div.appendChild(divElem)
        div.appendChild(btnRemove)
        
        // Adicionando a div na div cujo id é "area-tarefas" que está no código HTML.
        areaItem.appendChild(div)
        
        // Resetando o valor do input onde o usuário digita as tarefas.
        item.value = ''
        i++
    }
}


//<div id="area-tarefas">
//<div class="tarefa">
//    <div>
//        <input type="checkbox" onchange="ischeck()">
//        <label for="">Comprar o pão na padaria</label>
//    </div>
//    <button class="btnRemove"></button>
//</div>
//</div>



class Producto {
    constructor(codigo, nombre, precio, cantidad) {
        this.codigo = codigo;
        this.nombre = nombre;

        this.precio = precio;
        this.cantidad = cantidad;
        this.hijoIzquierdo = null;
        this.hijoDerecho = null;
    }

}
class BinaryTree {
    constructor() {
        this.raiz = null;
    }
    agregar(nuevo) {
        if (this.raiz == null)
            this.raiz = nuevo;
        else
            this._agregate(nuevo, this.raiz);
    }
    _agregate(nuevo, nodox) {
        if (nuevo.codigo < nodox.codigo)
            if (nodox.hijoIzquierdo == null)
                nodox.hijoIzquierdo = nuevo;
            else
                this._agregate(nuevo, nodox.hijoIzquierdo);
        else
        if (nodox.hijoDerecho == null)
            nodox.hijoDerecho = nuevo;
        else
            this._agregate(nuevo, nodox.hijoDerecho);
    }



    inOrder() {
        if (this.raiz == null)
            return " ";
        else
            return this._InOrderRec(this.raiz);
    }
    _InOrderRec(nodox) {
        let info = " ";
        if (nodox.hijoIzquierdo != null)
            info += this._InOrderRec(nodox.hijoIzquierdo);
        info += nodox.codigo;
        if (nodox.hijoDerecho != null)
            info += this._InOrderRec(nodox.hijoDerecho);
        return info;
    }


    postOrder() {
        if (this.raiz == null)
            return " ";
        else
            return this._PostOrderRec(this.raiz);

    }
    _PostOrderRec(nodox) {
        let ina = " ";
        if (nodox.hijoIzquierdo != null)
            ina += this._PostOrderRec(nodox.hijoIzquierdo)
        if (nodox.hijoDerecho != null)
            ina += this._PostOrderRec(nodox.hijoDerecho)
        ina += nodox.codigo;
        return ina;
    }


    preOrder(codigo) {
        if (this.raiz == null)
            return " ";
        else
            return this._PreOrderRec(this.raiz, codigo);
    }
    _PreOrderRec(nodox, data) {
        let pre = " ";
        if (nodox !== null) {
            pre += nodox.codigo;
            pre += this._PreOrderRec(nodox.hijoIzquierdo, data);
            pre += this._PreOrderRec(nodox.hijoDerecho, data);
        }
        return pre;
    }


    Buscar(data, nodox = this.raiz) {
        while (nodox != null) {
            if (nodox.codigo == data)
                return nodox;

            else if (data < nodox.codigo) {
                return this.Buscar(data, nodox = nodox.hijoIzquierdo)
            } else if (data > nodox.codigo) {
                return this.Buscar(data, nodox = nodox.hijoDerecho)
            }
        }
        return null;
    }
}



let miArbol = new BinaryTree();
const add = document.getElementById('add');
add.addEventListener("click", () => {
    let codigo = document.getElementById("cod").value;
    let nombre = document.getElementById("nom").value;
    let precio = document.getElementById("pre").value;
    let cantidad = document.getElementById("can").value;
    let producto = new Producto(codigo, nombre, precio, cantidad);
    miArbol.agregar(producto);
    let detalles = document.getElementById('detalles');
    detalles.innerHTML += '<p>Se ha anadido</p>' + nombre;

});

const find = document.getElementById('find');
find.addEventListener('click', () => {
    let cod = document.getElementById('cod').value;
    let res = miArbol.Buscar(cod);
    let detalles = document.getElementById('detalles');
    if (res == null)
        detalles.innerHTML += '<p>No existe el buscado</p>';
    else {
        detalles.innerHTML += `<p>Si existe </p>`;



    }
});

const inorder = document.getElementById("inorder");
inorder.addEventListener("click", () => {
    let inor = document.getElementById('detalles');
    let codigo = document.getElementById('cod').value;
    let resultado = miArbol.inOrder(codigo);
    inor.innerHTML += 'Inorder';
    inor.innerHTML += '<p>' + resultado + '<p>';
});
const postorder = document.getElementById("postorder");
postorder.addEventListener("click", () => {
    let inor = document.getElementById('detalles');
    let codigo = document.getElementById('cod').value;
    let resultado = miArbol.postOrder();
    inor.innerHTML += 'Postorder';
    inor.innerHTML += '<p>' + resultado + '</p>';
});
const preorder = document.getElementById("preorder");
preorder.addEventListener("click", () => {
    let inor = document.getElementById('detalles');
    let codigo = document.getElementById('cod').value;
    let resultado = miArbol.preOrder(codigo);
    inor.innerHTML += 'Preorder';
    inor.innerHTML += '<p>' + resultado + '</p>';
});
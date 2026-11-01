// Kosárkezelés localStorage mentéssel.
(() => {
 const KEY="nova_cart";
 const read=()=>{try{return JSON.parse(localStorage.getItem(KEY))||[]}catch{return []}};
 const save=items=>{localStorage.setItem(KEY,JSON.stringify(items));window.dispatchEvent(new CustomEvent("cart:updated"))};
 window.Cart={
  items:read,
  add(id,qty=1){const items=read(),line=items.find(x=>x.id===Number(id));if(line)line.qty+=qty;else items.push({id:Number(id),qty});save(items)},
  remove(id){save(read().filter(x=>x.id!==Number(id)))},
  setQty(id,qty){const items=read(),line=items.find(x=>x.id===Number(id));if(!line)return;if(qty<=0)return this.remove(id);line.qty=Math.min(99,qty);save(items)},
  clear(){save([])},
  count(){return read().reduce((sum,item)=>sum+item.qty,0)},
  subtotal(){return read().reduce((sum,item)=>{const p=window.getProduct(item.id);return sum+(p?p.price*item.qty:0)},0)},
  shipping(){return this.subtotal()===0||this.subtotal()>=30000?0:1490},
  total(){return this.subtotal()+this.shipping()}
 };
})();
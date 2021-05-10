interface User {
  name: string;
}
interface Product {
  id: string;
  price: number;
}

class Cart {
  /*
  public 속성: 모든 인스턴스에서 접근 가능
  private 속성: 해당 class 내부에서만 접근 가능
  protected 속성: private과 같이 해당 class 내부에서만 접근 가능하나, 상속 받은 class에서는 접근 가능
  */

  // protected user: User;
  // private store: object;

  // 생성자 매개변수에 접근제한자를 같이 작성할 수도 있음
  constructor(protected user: User, private store: object = {}) {
    this.user = user;
    // this.store = {};
  }
  public put(product: Product) {
    this.store = product;
  }
  private get() {
    return this.store;
  }
}
class PromotionCart extends Cart {
  addPromotion() {
    this.user;
  }
}

const cartJohn = new Cart({ name: 'john' });
const cartJay = new Cart({ name: 'jay' });
const cart2 = new PromotionCart({ name: 'john' });
// cart2.put();

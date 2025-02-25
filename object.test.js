import { isProperty } from "@babel/types";

const PUT_ANSWER_HERE = Symbol();

describe('Objects', () => {
  it('Should get the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place.', () => {
    function get(obj, path) {
      path=path.split('.');
    ;
      for(let i=0;i<path.length;i++){
        obj=obj[path[i]];
      }
      return obj;
    }

    expect(get({ a: { b: { c: 3 } } }, 'a')).toStrictEqual({ b: { c: 3 } });
    expect(get({ a: { b: { c: 3 } } }, 'a.b.c')).toBe(3);
    expect(get({ a: { b: { c: 1, d: 2 } } }, 'a.b')).toStrictEqual({
      c: 1,
      d: 2
    });
  });

  it('Creates an object composed of the picked object properties.', () => {
    function pick(obj, props) { 
      
    }
    const object = { a: 1, b: '2', c: 3 };
    
    expect(pick(object, ['a', 'c'])).toStrictEqual({ a: 1, c: 3 });
    expect(pick(object, ['c'])).toStrictEqual({ c: 3 });
  });

  it('Should clone object', () => {
    const person1 = {
      firstName: 'Ivan',
      secondName: 'Ivanov'
    };


    var person2 = {};
    for(var prop in person1){
      person2[prop]=person1[prop];
    }
    person2.firstName += ' Jr.';

    expect(person1.firstName).toBe('Ivan');
    expect(person2.firstName).toBe('Ivan Jr.');
    expect(person2.secondName).toBe('Ivanov');
  });

  it('Performs a shallow comparison between two values to determine if they are equivalent.', () => {
    const obj1 = { a: 1, b: 2 };
    const obj2 = { a: 1, b: 2 };
    const obj3 = { a: 1, b: 4 };
    function compare(obj1, obj2){
      for(var prop in obj1){
        if(obj2[prop]!=obj1[prop]){
          return false;
        }      
      }
      return true;
    }

    expect( compare(obj1, obj2) /**/).toBe(true);
    expect( compare(obj1, obj3)/* */).toBe(false);
  });

  it('Performs a deep comparison between two values to determine if they are equivalent.', () => {
    const obj1 = { a: 1, b: { a: 2 } };
    const obj2 = { a: 1, b: { a: 2 } };

    function compare(obj1, obj2){
      for(var prop in obj1){
        if(obj2[prop] === obj1[prop]){
          return true;
        }
      }
      return false;
    }

    expect( compare(obj1, obj2) /**/).toBe(true);
  });

  it.only('Fix me', () => {
    function hasAccess(role) {
      if (role.type ==  'admin') {
        return true;
      } else {
        return false;
      }
    }

    expect(hasAccess({ type: 'admin' })).toBe(true);
    expect(hasAccess({ type: 'anonymous' })).toBe(false);
  });
});

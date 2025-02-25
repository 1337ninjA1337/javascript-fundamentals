describe("Data types", () => {
  describe("Boolean", () => {
    it("Should define False and True boolean variables", () => {
      let a=false;
      let b=true;

      expect(a).toBeFalsy();
      expect(typeof a/* Get type of variable a */).toBe("boolean");
      expect(b).toBeTruthy();
      expect(typeof b/* Get type of variable b */).toBe("boolean");
    });

    it("Should use different logical operators with 2 boolean operands", () => {
      const FALSE = false;
      const TRUE = true;

      let useLogicalAnd = FALSE && TRUE;
      let useLogicalOr = FALSE || TRUE;
      let useLogicalNot = !FALSE;
      let useDoubleLogicalNot = !!FALSE;

      expect(useLogicalAnd).toBe(false);
      expect(useLogicalOr).toBe(true);
      expect(useLogicalNot).toBe(true);
      expect(useDoubleLogicalNot).toBe(false);
    });

    it("Should use different logical operators with at least 3 boolean operands", () => {
      const a = false;
      const b = false;
      const c = true;
      const d = true;

      let cond1 = (a || c) && d;
      let cond2 = (a && b) || (c && d);
      let cond3 = (a || b) && c;
      let cond4 = (c && a) || b;

      expect(cond1).toBe(true);
      expect(cond2).toBe(true);
      expect(cond3).toBe(false);
      expect(cond4).toBe(false);
    });
  });

  describe("Number", () => {
    it("Should define different numbers", () => {
      let a=10;
      let b=Number.POSITIVE_INFINITY;
      let c=20.2;
      let d=Number.MIN_SAFE_INTEGER;
      let nan = Number.NaN;

      expect(a).toBe(10);
      expect(!Number.isFinite(b)).toBe(true);
      expect(c).toBeGreaterThan(20);
      expect(c).toBeLessThan(21);
      expect(d).toBeLessThan(0);
      expect(nan).toBeNaN();
    });

    it("Should use base operators", () => {
      const a = 10;
      const b = 30;

      expect(a + b).toBe(40/* ??? */);
      expect(a-b/* Put Expression Here */).toBe(-20);
      expect(b-a/* Put Expression Here */).toBe(20);
      expect(a*b/* Put Expression Here */).toBe(300);
      expect(b/a/* Put Expression Here */).toBe(3);
      expect(a/b/* Put Expression Here */).toBeCloseTo(0.333);
    });

    it("Should combine base operators", () => {
      const a = 10;
      const b = 30;
      const c = 100;

      expect(a + b + c).toBe(140);
      expect(a*b+c/* Put Expression Here */).toBe(400);
      expect((b-a)*c/* Put Expression Here */).toBe(2000);
      expect(b*c+a*b/* Put Expression Here */).toBe(3300);
      // TODO: write 3 own test
      expect(a+b-c*a).toBe(-960);
      expect((a-c)*b).toBe(-2700);
      expect((a-b)+(c-b)).toBe(50);
    });

    it("Should convert to number", () => {
      expect(Number("123")).toBe(123);
      expect(Number("12.3")).toBe(12.3);

      expect(parseInt("1100",2)/* Number(???) */).toBe(12);
      expect(12.3/* Number(???) */).toBe(12.3);
      expect(Number(0)/* Number(???) */).toBe(0);
      expect(parseInt("0",2)/* Number(???) */).toBe(0);
      expect(Number("0b11")).toBe( 3/* ??? */);
      expect(Number("foo")).toBe(NaN);
      expect(Number.NaN/* Number(???*/).toBe(NaN);
      expect(Number(-1/0/* "???" */)).toBe(Number.NEGATIVE_INFINITY);
    });
  });

  describe("String, object, null, undefined and symbols", () => {
    it("String", () => {
      let str1='string'; // Use single quote
      let str2=String(str1); // Use String(???)
      let str3=new String(str1); // Use new String(???)
      let str4=str1; // Use template string and str1 variable

      expect(str1).toBe("string");
      expect(str1 === str2).toBeTruthy();
      expect(str1 === str3).toBeFalsy();
      expect(str1 === str4).toBeTruthy();
      expect(typeof str3/* use typeof */).toBe("object");
    });

    it("Should define object with 2 props", () => {
      let obj=new Object("  "); // Define object with 2 props
      


      expect(typeof obj).toBe("object");
      expect(Object.keys(obj).length).toBe(2);
     
      // TODO: write 2 own tests
    });

    it("Should define variable with Null and undefined values", () => {
      let nullVar=null; // Set null
      let undefinedVar; // Set undefined
      let someVar; // Do not define it!!!

      expect(nullVar).toBeNull();
      expect(undefinedVar).toBe(undefinedVar);
      expect(someVar).toBe(undefined);
      expect(typeof nullVar/* typeof ??? */).toBe("object");
      expect(typeof undefinedVar /* typeof ??? */).toBe("undefined");
    });

    it("Should define 2 Symbol variable with the same description", () => {
      const smbl1 = Symbol("test");
      const smbl2 = Symbol("test");

      expect(typeof smbl1).toBe("symbol"/* ??? */);
      expect(typeof smbl2).toBe("symbol"/* ??? */);
      expect(smbl1==smbl2/* Compare smbl1 and smbl2  */).toBe(false/* ??? */);
    });
  });
});

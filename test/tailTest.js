const tail = require("../tail");
const assert = require("chai").assert;



describe("#tail", () => {


  it("returns ['lighthouse, 'labs'] for ['hello', 'lighthouse', 'labs']", () => {
    assert.deepEqual(tail(["hello", "lighthouse", "labs"]), ["lighthouse", "labs"])
  });

  it("returns [] for [5]", () => {
    assert.deepEqual(tail([5]), []);
  });

});

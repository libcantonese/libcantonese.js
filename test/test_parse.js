var assert = require("assert")
var libcantonese = require("../libcantonese.js")
describe('Parse', function(){
  describe('#parse_lshk()', function(){
    it('should parse all valid lshk correctly', function(){
      // aa
      assert.deepEqual(libcantonese.parse_lshk('aa'),  [''  ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('baa'), ['b' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('paa'), ['p' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('maa'), ['m' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('faa'), ['f' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('daa'), ['d' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('taa'), ['t' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('naa'), ['n' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('laa'), ['l' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('gaa'), ['g' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('kaa'), ['k' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('ngaa'),['ng','aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('haa'), ['h' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('gwaa'),['gw','aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('kwaa'),['kw','aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('waa'), ['w' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('zaa'), ['z' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('caa'), ['c' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('saa'), ['s' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_lshk('jaa'), ['j' ,'aa', '']);
    });
  });
})

var assert = require("assert")
var libcantonese = require("libcantonese")
describe('Parse', function(){
  describe('#parse_jyutping()', function(){
    it('should parse all valid lshk correctly', function(){
      // aa
      assert.deepEqual(libcantonese.parse_jyutping('aa'),  [''  ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('baa'), ['b' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('paa'), ['p' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('maa'), ['m' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('faa'), ['f' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('daa'), ['d' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('taa'), ['t' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('naa'), ['n' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('laa'), ['l' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('gaa'), ['g' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('kaa'), ['k' ,'aa', '']);
      // assert.deepEqual(libcantonese.parse_jyutping('ngaa'),['ng','aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('haa'), ['h' ,'aa', '']);
      // assert.deepEqual(libcantonese.parse_jyutping('gwaa'),['gw','aa', '']);
      // assert.deepEqual(libcantonese.parse_jyutping('kwaa'),['kw','aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('waa'), ['w' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('zaa'), ['z' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('caa'), ['c' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('saa'), ['s' ,'aa', '']);
      assert.deepEqual(libcantonese.parse_jyutping('jaa'), ['j' ,'aa', '']);

    })
  })
})

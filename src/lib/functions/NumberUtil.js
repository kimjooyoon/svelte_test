/** size(숫자)를 입력받아 해당 크기의 배열을 생성한다
 * - IntArrayBySize(5) => [ 1,2,3,4,5 ]
 *
 * @param size {number}
 * @returns {number[]}
 * @constructor
 */
export function IntArrayBySize(size) {
  const re = /^[0-9]+$/;
  if (!re.test("" + size)) return [];
  return [...Array(size).keys()].map(x => x + 1);
}

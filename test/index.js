import {expect} from 'chai';
import {filterTree} from '../src/index';

const tree = [
	{
		name: 'a1',
    children: [
      {
        name: 'a11'
      },
      {
        name: 'a12'
      }
    ]
	},
  {
    name: 'b1'
  },
  {
    name: 'c1',
    children: [
      {
        name: 'c11'
      },
      {
        name: 'c0',
        children: [
          {
            name: 'c111'
          },
          {
            name: 'c13'
          }
        ]
      }
    ]
  },
  {
    name: 'd1',
    children: [
      {
        name: 'd11'
      },
      {
        name: 'd',
        children: [
          {
            name: 'd1'
          },
          {
            name: 'd13'
          }
        ]
      }
    ]
  }

];

const searchResultOfa = [tree[0]];
const searchResultOf2 = [
  {
    name: 'a1',
    children: [
      {
        name: 'a12'
      }
    ]
  }
];
const searchResultOf3 = [{
    name: 'c1',
    children: [
      {
        name: 'c0',
        children: [
          {
            name: 'c13'
          }
        ]
      }
    ]
  },
  {
    name: 'd1',
    children: [
      {
        name: 'd',
        children: [
          {
            name: 'd13'
          }
        ]
      }
    ]
  }]

const accesor = i => i.name;
const childrenAccessor = i => i.children;

describe('FilterTree', function() {
	it('should return equal tree if search string is empty', function () {
		expect(filterTree(tree, '', accesor, childrenAccessor)).eql(tree);
	});

  it('should return the same tree if search string is empty', function () {
    expect(filterTree(tree, '', accesor, childrenAccessor)).equal(tree);
  });

  it('should return filter nodes', function () {
    expect(filterTree(tree, 'b', accesor, childrenAccessor)).eql([{name: 'b1'}]);
  });

  it('should return filter nodes with children', function () {
    expect(filterTree(tree, 'a', accesor, childrenAccessor)).eql(searchResultOfa);
  });

  it('should return filter nodes with children by children', function () {
    expect(filterTree(tree, '3', accesor, childrenAccessor)).eql(searchResultOf3);
  });
});

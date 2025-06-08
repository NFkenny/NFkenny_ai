var txt = '外层变量-->你好呀';

function fn() {
  console.log(txt);
  if (true) {
	var txt = '内层变量-->hello';
  }
}

fn();
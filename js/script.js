const flexWrap = document.querySelector('.flex-wrap');
const direction = document.querySelector('.direction');
const justifyContent = document.querySelector('.justify-content');
const alignItems = document.querySelector('.align-items');

const wrapControls = document.querySelectorAll('.wrap-control');
const directionControls = document.querySelectorAll('.direction-control');
const justifyContentControls = document.querySelectorAll('.justify-content-control');
const alignItemsControls = document.querySelectorAll('.align-items-control');

const buttons = document.querySelectorAll('.button');

function flexBox(element, controls) {
	controls.forEach(control => {
		control.addEventListener('click', event => {
			buttons.forEach(button => {
				if (event.target.classList.contains('button')) {
					button.classList.remove('active');
					event.target.classList.add('active');
					element.classList.remove(button.textContent);
					element.classList.add(event.target.textContent);
				}
			});
		});
	});
}

flexBox(flexWrap, wrapControls);
flexBox(direction, directionControls);
flexBox(justifyContent, justifyContentControls);
flexBox(alignItems, alignItemsControls);
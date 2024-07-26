const customRender = (reactElement, container) => {
    const domEle = document.createElement(reactElement.type);
    domEle.innerHTML = reactElement.children;
    domEle.setAttribute('href', reactElement.props.href);
    domEle.setAttribute('target', reactElement.props.target);

    container.appendChild(domEle);
};

const reactElement = {
    type: 'a',
    props: {
        href: 'https://searx.garudalinux.org',
        target: '_blank',
    },
    children: 'Click me to visit searxng'
};

const mainContainer = document.querySelector('#app');

customRender(reactElement, mainContainer);
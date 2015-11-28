
import React from 'react';
import ReactDOM from 'react-dom';

import {BorderLayout,Header,Content,East} from 'reactor-ui/layout/BorderLayout';


function renderGrid() {

    ReactDOM.render(
        <BorderLayout>
            <Header><div>{"Header"}</div></Header>
            <Content>
                <East width={'80px'}>
                    <ul>
                        <li>1</li>
                        <li>2</li>
                        <li>3</li>
                    </ul>
                </East>
                <p>This is a  paragraph</p>
            </Content>
        </BorderLayout>,
        document.getElementById('layout-container'));
}


renderGrid();

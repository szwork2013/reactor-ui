
import React from 'react';
import {Toast,toast} from 'reactor-ui/alert/Toast';


describe("Toast Tests" , () => {


    it.only('shows toast when toast is called', () => {

        toast(<Toast />);

    });

});

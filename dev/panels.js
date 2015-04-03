'use strict';

var React = require("react");

var Panel = require("reactor-ui/panel");
var Pill = require("reactor-ui/pill");

React.render(
    <Panel title="Panel Example" closeable={true} collapsable={true}>
        <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Esse enim quam vellet iniquus iustus poterat inpune.
            </p>
            <p>
            Duo Reges: constructio interrete. Si enim ita est, vide ne
            facinus facias, cum mori suadeas. Aliter enim explicari,
            quod quaeritur, non potest. Sin laboramus, quis est,
            qui alienae modum statuat industriae Igitur ne dolorem quidem.
            </p>
        </div>
    </Panel>
,document.getElementById("cont1"));

React.render(
    <Panel title="Panel Example" closeable={true} collapsable={true} maxHeight="150px">
        <div>
            <Pill size="sm" ><span className="fa fa-thumbs-up"></span> Like</Pill> <Pill size="sm" type="primary"><span className="fa fa-heart"></span> Love</Pill>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Esse enim quam vellet iniquus iustus poterat inpune.
            </p>
            <p>
                Duo Reges: constructio interrete. Si enim ita est, vide ne
                facinus facias, cum mori suadeas. Aliter enim explicari,
                quod quaeritur, non potest. Sin laboramus, quis est,
                qui alienae modum statuat industriae Igitur ne dolorem quidem.
            </p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Esse enim quam vellet iniquus iustus poterat inpune.
            </p>
            <p>
                Duo Reges: constructio interrete. Si enim ita est, vide ne
                facinus facias, cum mori suadeas. Aliter enim explicari,
                quod quaeritur, non potest. Sin laboramus, quis est,
                qui alienae modum statuat industriae Igitur ne dolorem quidem.
            </p>
        </div>
    </Panel>
,document.getElementById("cont2"));
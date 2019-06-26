import React, { Component } from 'react';

import { Scrollbars } from 'react-custom-scrollbars';

const paragraphText =
    "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.";

export default class AutohideTracksBlock extends React.Component {
    getParagraphs(count) {
        return [...Array(count)].map((v, i) => <p key={i}>{paragraphText}</p>);
    }

    showTracks = () => {
        this.scrollbar.trackXEl.style.opacity = 1;
        this.scrollbar.trackYEl.style.opacity = 1;

        this.dragEndTO && clearTimeout(this.dragEndTO);
        this.dragEndTO = null;
    };

    hideTracks = () => {
        if (
            this.scrollbar.thumbXEl.classList.contains("dragging") ||
            this.scrollbar.thumbYEl.classList.contains("dragging")
        ) {
            return;
        }

        this.scrollbar.trackXEl.style.opacity = 1;
        this.scrollbar.trackYEl.style.opacity = 1;

        this.dragEndTO && clearTimeout(this.dragEndTO);
        this.dragEndTO = null;
    };

    handleDragEnd = () => {
        this.dragEndTO = setTimeout(this.hideTracks, 500);
    };

    render() {
        return (
            <div className="block" id="AutohideTracksBlock">
                <div className="title">Tracks autohide</div>
                <div className="description">
                    Here we can see mobile-like behaviour, scrollbars are hidden when scroll is not performed.
                    <br />
                    It is implemented with help of <code>onScrollStart</code>, <code>onScrollStop</code> and{" "}
                    <code>onDragEnd</code> callbacks.
                </div>
                <div className="content" style={{height: 280}}>
                <Scrollbars ref="scrollio" 
    onScroll={this.onScroll} 
    renderThumbHorizontal={props => <div {...props} className="thumb-horizontal"/>}
    autoHeight='true' autoHeightMax={Number.MAX_VALUE} renderTrackVertical={() => <div></div>} >

    <p>Some great content...Some great content...</p>

</Scrollbars>
                </div>
            </div>
        );
    }
}
import React from 'react'
import { changeNoteValues, changeNotePosition } from '../../messages/note'
import { getElementAt, removeElementAt } from '../Canvas/Memory'



class NotePanel extends React.Component {

    constructor(props) {
        super(props)
    }

    componentDidUpdate() {
        if (this.props.object) {
            document.getElementById("noteTextArea").focus();
        }
    }

    render() {

        if (this.props.object === null || this.props.object === undefined) {
            return <div></div>
        }

        if (!this.props.object.hasOwnProperty("fontColor")) {
            this.props.object.fontColor = "#000000"
        }

        if (!this.props.object.hasOwnProperty("fillColor")) {
            this.props.object.fillColor = "#ffffff"
        }

        return (
            <div>
                <h3>Text</h3>
                <textarea
                    id="noteTextArea"
                    type="text"
                    value={this.props.object.text}
                    onChange={(event) => {
                        changeNoteValues(this.props.object.id, "text", event.target.value)
                        this.props.updatePanelDrawEverything()
                        // console.log(getElementAt(this.props.object.id))
                    }}
                />
                <h3>Font size</h3>
                <input
                    type="number"
                    value={this.props.object.fontSize}
                    onChange={(event) => {
                        changeNoteValues(this.props.object.id, "fontSize", parseInt(event.target.value))
                        this.props.updatePanelDrawEverything()
                        // console.log(getElementAt(this.props.object.id))
                    }}
                />
                <h3>Font colour</h3>
                <input
                    type="color"
                    value={this.props.object.fontColor}
                    onChange={(event) => {
                        changeNoteValues(this.props.object.id, "fontColor", event.target.value)
                        this.props.updatePanelDrawEverything()
                        // console.log(getElementAt(this.props.object.id))
                    }}
                />
                <h3>Fill colour</h3>
                <input
                    type="color"
                    value={this.props.object.fillColor}
                    onChange={(event) => {
                        changeNoteValues(this.props.object.id, "fillColor", event.target.value)
                        this.props.updatePanelDrawEverything()
                        // console.log(getElementAt(this.props.object.id))
                    }}
                />
                <h3>Width</h3>
                <input
                    type="number"
                    value={this.props.object.width}
                    onChange={(event) => {
                        changeNoteValues(this.props.object.id, "width", parseInt(event.target.value))
                        this.props.updatePanelDrawEverything()
                        // console.log(getElementAt(this.props.object.id))
                    }}
                />
                <h3>Height</h3>
                <input
                    type="number"
                    value={this.props.object.height}
                    onChange={(event) => {
                        changeNoteValues(this.props.object.id, "height", parseInt(event.target.value))
                        this.props.updatePanelDrawEverything()
                        // console.log(getElementAt(this.props.object.id))
                    }}
                />
                <h3>Position</h3>
                <p>X</p>
                <input
                    type="number"
                    value={this.props.object.coordinates.x}
                    onChange={(event) => {
                        changeNotePosition(this.props.object.id, "x", parseInt(event.target.value))
                        this.props.updatePanelDrawEverything()
                        // console.log(getElementAt(this.props.object.id))
                    }}
                />
                <p>Y</p>
                <input
                    type="number"
                    value={this.props.object.coordinates.y}
                    onChange={(event) => {
                        changeNotePosition(this.props.object.id, "y", parseInt(event.target.value))
                        this.props.updatePanelDrawEverything()
                        // console.log(getElementAt(this.props.object.id))
                    }}
                />
                <button
                    onClick={() => {
                        removeElementAt(this.props.object.id)
                        this.props.updatePanelDrawEverything()
                    }}
                >
                    Delete
                </button>
            </div>
        )
    }
}

export default NotePanel;
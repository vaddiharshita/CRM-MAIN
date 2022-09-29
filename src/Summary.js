import React from "react";
import "./style/summary.css";
import { BsThreeDotsVertical } from "react-icons/bs";
export default function Summary() {
return (
<>
<div className="summary">
<div className="summary_row1">
<label>Manager wise Prospect Count</label>
<BsThreeDotsVertical className="icon" />{" "}
</div>
<div className="summary_row">
<div className="summary_single">
<label className="summary_value">18</label>
<label>Manager 1</label>
</div>
<div className="summary_single">
<label className="summary_value">12</label>
<label>Manager 1</label>
</div>
<div className="summary_single">
<label className="summary_value">32</label>
<label>Manager 1</label>
</div>
</div>
<div className="summary_row">
<div className="summary_single">
<label className="summary_value">32</label>
<label>Manager 1</label>
</div>
<div className="summary_single">
<label className="summary_value">4</label>
<label>Manager 1</label>
</div>
<div className="summary_single">
<label className="summary_value">11</label>
<label>Manager 1</label>
</div>
</div>

</div>
</>
)
}

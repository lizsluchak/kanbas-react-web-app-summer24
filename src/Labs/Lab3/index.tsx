import BooleanVariables from "./BooleanVariables";
import ConditionalOutputIfElse from "./ConditionalOutputIfElse";
import ConditionalOutputInline from "./ConditionalOutputInLine";
import IfElse from "./IfElse";
import LegacyFunctions from "./LegacyFunctions";
import TernaryOperator from "./TernaryOperator";
import VariableTypes from "./VariableTypes";
import VariablesAndConstants from "./VariablesAndConstants";

export default function Lab3() {
    return(
        <div id="wd-lab3" className="container-fluid">
        <h3>Lab 3</h3>
        <hr/><hr/>
        <VariablesAndConstants />
        <VariableTypes />
        <BooleanVariables />
        <IfElse />
        <TernaryOperator />
        <ConditionalOutputIfElse />
        <ConditionalOutputInline />
        <LegacyFunctions />
      </div>
    );
}

export {}
import process from "process";

process.report.reportOnFatalError = true;
process.report.reportOnSignal = true;
process.report.reportOnUncaughtException = true;
process.release.filename = "report.json";

function sampleError(){
    throw new error("ups")
}

sampleError();
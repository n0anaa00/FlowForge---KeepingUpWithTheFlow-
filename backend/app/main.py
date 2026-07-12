from fastapi import FastAPI

app = FastAPI(
    title="FlowForge API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {"message": "Warmly Welcome to my FlowForge API"}

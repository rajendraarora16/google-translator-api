# Google translator API

```
docker build -t google_translator_api .
```

```
docker run -d -p 8086:8000 google_translator_api
```

**Sample URL for translator:** 

```
http://localhost:8086/translator?translate=hi&word=how%20are%20you
```

**Sample URL for audio translator:**

```
http://localhost:8000/voice-translator?word=how%20are%20you
```

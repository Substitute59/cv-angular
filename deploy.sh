#!/bin/bash
ng build --output-path docs --base-href /nom-de-votre-repo/
git add .
git commit -m "Update CV"
git push origin main
ng deploy --base-href=/nom-de-votre-repo/
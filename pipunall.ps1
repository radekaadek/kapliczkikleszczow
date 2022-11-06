pip freeze > uninstall.txt
pip uninstall -y -r uninstall.txt
Remove-item "uninstall.txt"
pip install -r requirements.txt

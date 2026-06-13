const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

walk('src', (filePath) => {
    if (filePath.endsWith('.tsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let newContent = content
            .replace(/whatsapp-logo\.svg" className="h-4 w-4/g, 'whatsapp-logo.svg" className="h-5 w-5')
            .replace(/whatsapp-logo\.svg" className="h-5 w-5/g, 'whatsapp-logo.svg" className="h-6 w-6')
            .replace(/whatsapp-logo\.svg" className="h-4\.5 w-4\.5/g, 'whatsapp-logo.svg" className="h-6 w-6');
        
        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf8');
            console.log('Updated', filePath);
        }
    }
});

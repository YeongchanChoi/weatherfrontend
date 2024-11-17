import os
import json

def collect_files(directory, extensions):
    """
    지정된 디렉토리 내에서 주어진 확장자를 가진 모든 파일의 경로와 내용을 수집합니다.
    
    Args:
        directory (str): 탐색할 디렉토리 경로.
        extensions (tuple): 수집할 파일의 확장자들.
    
    Returns:
        dict: 파일 경로를 키로, 파일 내용을 값으로 하는 사전.
    """
    files_dict = {}
    for root, _, files in os.walk(directory):
        for file in files:
            if file.endswith(extensions):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    # 상대 경로로 저장
                    relative_path = os.path.relpath(file_path, start=os.getcwd())
                    files_dict[relative_path] = content
                except Exception as e:
                    print(f"Error reading {file_path}: {e}")
    return files_dict

def main():
    # 수집할 디렉토리와 확장자 설정
    components_dir = 'src/components'
    pages_dir = 'src/pages'
    
    # components 디렉토리에서는 .js와 .css 파일 수집
    components_files = collect_files(components_dir, ('.js', '.css'))
    
    # pages 디렉토리에서는 .js 파일 수집
    pages_files = collect_files(pages_dir, ('.js',))
    
    # 최종 JSON 구조 생성
    data = {
        'components': components_files,
        'pages': pages_files
    }
    
    # JSON 파일로 저장
    output_file = 'code_files.json'
    try:
        with open(output_file, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
        print(f"Successfully saved to {output_file}")
    except Exception as e:
        print(f"Error writing to {output_file}: {e}")

if __name__ == "__main__":
    main()